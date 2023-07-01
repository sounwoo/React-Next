import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent } from "react";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import {
    IMutation,
    IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }
`;

const CREATE_BOARD = gql`
    # 타입정의
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        # 실제 우리가 전달할 변수 적는 곳
        createBoard(createBoardInput: $createBoardInput) {
            _id
        }
    }
`;

export default function ImageUploadPage(): JSX.Element {
    const [imageUrl, setImageUrl] = useState("");
    const [file, setFile] = useState<File>();

    const [createBoard] = useMutation(CREATE_BOARD);
    const [uploadFile] = useMutation<
        Pick<IMutation, "uploadFile">,
        IMutationUploadFileArgs
    >(UPLOAD_FILE);

    const onClickSubmit = async (): Promise<void> => {
        // 1. uploadFile
        const resultFile = await uploadFile({ variables: { file } });
        const url = resultFile.data?.uploadFile.url;
        // 2. createBoard
        const result = await createBoard({
            // $ 역할을 해줌
            variables: {
                createBoardInput: {
                    writer: "철수",
                    password: "1234",
                    title: "제목",
                    contents: "내용",
                    images: [url],
                },
            },
        });
        console.log(result);
    };

    const onChangeFile = async (
        event: ChangeEvent<HTMLInputElement>
    ): Promise<void> => {
        const file = event.target.files?.[0];
        if (!file) return;
        // console.log(file, "파일 있음!");

        // 1. 임시 url 생성 => (가짜URL - 내 브라우저에서만 접근 가능)
        // 최근 기술이라 브라우저에서 호환안될 가능성이 있다.
        // const result = URL.createObjectURL(file);
        // console.log(result);

        // 2. 임시 url 생성 => (진짜URL - 다른 브라우저에서도 접근 가능)
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (event) => {
            // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유 : event target은 태그만을 가르키지 않음
            // console.log(event.target?.result);
            if (typeof event.target?.result === "string") {
                setImageUrl(event.target?.result);
                setFile(file);
            }
        };
    };

    return (
        <>
            <input type="file" onChange={wrapAsync(onChangeFile)} />
            <img src={imageUrl} />
            {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}

            <button onClick={wrapAsync(onClickSubmit)}>게시글 등록하기</button>
        </>
    );
}
