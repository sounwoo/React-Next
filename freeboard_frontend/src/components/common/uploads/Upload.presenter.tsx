import * as S from "./Upload.styles";
import { IUploadsUiProps } from "./Upload.types";

export default function UploadUI(props: IUploadsUiProps) {
    return (
        <>
            {props.fileUrl ? (
                <S.UploadImage
                    onClick={props.onClickUpload}
                    src={`https://storage.googleapis.com/${props.fileUrl}`}
                />
            ) : (
                <S.UploadButton onClick={props.onClickUpload}>
                    <>+</>
                    <>Upload</>
                </S.UploadButton>
            )}
            <S.UploadHidden
                type="file"
                onChange={props.onChangFile}
                ref={props.fileRef}
            />
        </>
    );
}
