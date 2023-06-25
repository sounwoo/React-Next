import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent, useRef } from "react";
import {
    IMutation,
    IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";
import { checkValidationFile } from "../../../src/commons/libraries/validationFile";

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
    const fileRef = useRef<HTMLInputElement>(null);

    const [uploadFile] = useMutation<
        Pick<IMutation, "uploadFile">,
        IMutationUploadFileArgs
    >(UPLOAD_FILE);

    const onChangeFile = async (
        event: ChangeEvent<HTMLInputElement>
    ): Promise<void> => {
        const file = event.target.files?.[0];

        const isValid = checkValidationFile(file);
        if (!isValid) return;

        const result = await uploadFile({ variables: { file } });
        setImageUrl(result.data?.uploadFile.url ?? "");
    };

    const onClickImage = (): void => {
        fileRef.current?.click();
    };

    // -------------------

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [createBoard] = useMutation(CREATE_BOARD);

    const onClickSubmit = async (): Promise<void> => {
        const result = await createBoard({
            // $ 역할을 해줌
            variables: {
                createBoardInput: {
                    writer,
                    password: "1234",
                    title,
                    contents,
                    images: [imageUrl],
                },
            },
        });
        console.log(result);
    };

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>): void => {
        setWriter(event.target.value);
    };

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value);
    };
    const onChangeContents = (event: ChangeEvent<HTMLInputElement>): void => {
        setContents(event.target.value);
    };

    return (
        <>
            작성자:
            <input type="text" onChange={onChangeWriter} />
            <br />
            제목:
            <input type="text" onChange={onChangeTitle} />
            <br />
            내용:
            <input type="text" onChange={onChangeContents} />
            <div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "gray",
                }}
                onClick={onClickImage}
            >
                이미지선택
            </div>
            <input
                style={{ display: "none" }}
                type="file"
                onChange={onChangeFile}
                ref={fileRef}
                accept="image/jpeg,image/png"
            />
            <img src={`https://storage.googleapis.com/${imageUrl}`} />
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    );
}
