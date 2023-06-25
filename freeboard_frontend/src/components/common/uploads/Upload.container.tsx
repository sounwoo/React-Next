import { useMutation } from "@apollo/client";
import {
    IMutation,
    IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import { UPLOAD_FILE } from "./Upload.queries";
import { ChangeEvent, useRef } from "react";
import UploadUI from "./Upload.presenter";
import { IUploadsProps } from "./Upload.types";
import { checkValidationFile } from "../../../commons/libraries/validationFile";
import { Modal } from "antd";

export default function Uploads(props: IUploadsProps): JSX.Element {
    const fileRef = useRef<HTMLInputElement>(null);

    const [imageUpload] = useMutation<
        Pick<IMutation, "uploadFile">,
        IMutationUploadFileArgs
    >(UPLOAD_FILE);

    const onClickUpload = (): void => {
        fileRef.current?.click();
    };

    const onChangFile = async (
        event: ChangeEvent<HTMLInputElement>
    ): Promise<void> => {
        const file = event.target.files?.[0];
        const isValid = checkValidationFile(file);
        if (!isValid) return;
        try {
            const result = await imageUpload({ variables: { file } });
            props.onChangeFileUrls(
                result.data?.uploadFile.url ?? "",
                props.index
            );
        } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
        }
    };

    return (
        <UploadUI
            fileRef={fileRef}
            fileUrl={props.fileUrl}
            onChangeFileUrls={props.onChangeFileUrls}
            onClickUpload={onClickUpload}
            onChangFile={onChangFile}
        />
    );
}
