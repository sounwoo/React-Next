// import { gql, useMutation } from "@apollo/client";
import { useState, type ChangeEvent } from "react";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
// import {
//     IMutation,
//     IMutationUploadFileArgs,
// } from "../../../src/commons/types/generated/types";

// const UPLOAD_FILE = gql`
//     mutation uploadFile($file: Upload!) {
//         uploadFile(file: $file) {
//             url
//         }
//     }
// `;

export default function ImageUploadPage(): JSX.Element {
    const [imageUrl, setImageUrl] = useState("");
    // const [uploadFile] = useMutation<
    //     Pick<IMutation, "uploadFile">,
    //     IMutationUploadFileArgs
    // >(UPLOAD_FILE);
    const onChangeFile = async (
        event: ChangeEvent<HTMLInputElement>
    ): Promise<void> => {
        const file = event.target.files?.[0];
        if (!file) return;
        console.log(file, "파일 있음!");

        // const result = await uploadFile({ variables: { file } });
        // console.log(result.data?.uploadFile.url);
        // setImageUrl(result.data?.uploadFile.url ?? "");

        // 1. 임시 url 생성 => (가짜URL - 내 브라우저에서만 접근 가능)
        // 최근 기술이라 브라우저에서 호환안될 가능성이 있다.
        // const result = URL.createObjectURL(file);
        // console.log(result);

        // 2. 임시 url 생성 => (진짜URL - 다른 브라우저에서도 접근 가능)
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (event) => {
            // 게시판에서 event.target.id를 쓰면 eslint가 잡았던 이유 : event target은 태그만을 가르키지 않음
            console.log(event.target?.result);
            if (typeof event.target?.result === "string")
                setImageUrl(event.target?.result);
        };
    };

    return (
        <>
            <input type="file" onChange={wrapAsync(onChangeFile)} />
            <img src={`https://storage.googleapis.com/${imageUrl}`} />
        </>
    );
}
