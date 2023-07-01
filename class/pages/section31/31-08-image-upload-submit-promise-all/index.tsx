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
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
        }
    }
`;

export default function ImageUploadPage(): JSX.Element {
    const [imageUrls, setImageUrls] = useState(["", "", ""]);
    const [files, setFiles] = useState<File[]>([]);

    const [createBoard] = useMutation(CREATE_BOARD);
    const [uploadFile] = useMutation<
        Pick<IMutation, "uploadFile">,
        IMutationUploadFileArgs
    >(UPLOAD_FILE);

    const onClickSubmit = async (): Promise<void> => {
        // 1. uploadFile
        // 1-1) 안좋은 예제  - await를 매번 기다림 => for문 사용해도 마찬가지(이유: i 값에 의존하기 때문에)
        // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
        // const resultFile1 = await uploadFile({ variables: { file: files[1] } });
        // const resultFile2 = await uploadFile({ variables: { file: files[2] } });
        // const url0 = resultFile0.data?.uploadFile.url;
        // const url1 = resultFile1.data?.uploadFile.url;
        // const url2 = resultFile2.data?.uploadFile.url;
        // const resultUrls = [url0, url1, url2];

        // 1-2) 좋은예제 - Promise.all 사용
        // const results = await Promise.all([
        //     uploadFile({ variables: { file: files[0] } }),
        //     uploadFile({ variables: { file: files[1] } }),
        //     uploadFile({ variables: { file: files[2] } }),
        // ]);
        // console.log(results); // [resultFile0,resultFile1,resultFile2]
        // const resultUrls = results.map((el) => el.data?.uploadFile.url); // [url0,url1,url2]

        // 1-3)  좋은예제 - Promise.all 사용 => 리팩토링
        // const files = [File0, File1, File2];
        // files.map((el) => uploadFile({ variables: { file: el } }));

        const results = await Promise.all(
            files.map((el) => uploadFile({ variables: { file: el } }))
        );
        console.log(results);
        const resultUrls = results.map((el) => el.data?.uploadFile.url);

        // 2. createBoard
        const result = await createBoard({
            // $ 역할을 해줌
            variables: {
                createBoardInput: {
                    writer: "철수",
                    password: "1234",
                    title: "제목",
                    contents: "내용",
                    images: resultUrls,
                },
            },
        });
        console.log(result);
    };

    const onChangeFile =
        (index: number) =>
        async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
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
                    const tempUrls = [...imageUrls];
                    tempUrls[index] = event.target?.result;
                    setImageUrls(tempUrls);

                    const tempFiles = [...files];
                    tempFiles[index] = file;
                    setFiles(tempFiles);
                }
            };
        };

    return (
        <>
            <input type="file" onChange={wrapAsync(onChangeFile(0))} />
            <input type="file" onChange={wrapAsync(onChangeFile(1))} />
            <input type="file" onChange={wrapAsync(onChangeFile(2))} />
            <img src={imageUrls[0]} />
            <img src={imageUrls[1]} />
            <img src={imageUrls[2]} />
            {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}

            <button onClick={wrapAsync(onClickSubmit)}>게시글 등록하기</button>
        </>
    );
}
