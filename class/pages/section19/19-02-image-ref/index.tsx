import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent, useRef } from "react";
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
        const file = event.target.files?.[0]; // 배열로 들어오는 이유 : multiple일떄, 여러개 드래그 가능
        const result = await uploadFile({ variables: { file } });
        setImageUrl(result.data?.uploadFile.url ?? "");
    };

    const onClickImage = (): void => {
        // document.getElementById("파일태그ID")?.click()
        fileRef.current?.click();
    };

    return (
        <>
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
            />
            <img src={`https://storage.googleapis.com/${imageUrl}`} />
        </>
    );
}
