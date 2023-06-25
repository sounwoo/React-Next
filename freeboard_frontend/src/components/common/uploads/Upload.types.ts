import { ChangeEvent, RefObject } from "react";

export interface IUploadsProps {
    index: number;
    fileUrl: string;
    onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IUploadsUiProps {
    onClickUpload: () => void;
    onChangeFileUrls: (fileUrl: string, index: number) => void;
    onChangFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
    fileRef: RefObject<HTMLInputElement>;
    fileUrl: string;
}
