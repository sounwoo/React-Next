import { ChangeEvent, MouseEvent, RefObject } from "react";
import { IQuery } from "../../../../commons/types/generated/types";
import { Address } from "react-daum-postcode";

export interface IBoardWriteProps {
    isEdit: boolean;
    data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
    title: string;
    contents: string;
}

export interface IBoardWriteUIProps {
    writerError: string;
    passwordError: string;
    titleError: string;
    contentsError: string;
    youtubeError: string;
    addressError: string;
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickSubmit: () => void;
    onClickUpdate: () => void;
    onToggleModal: () => void;
    handleComplete: (data: Address) => void;
    isActive: boolean;
    isEdit: boolean;
    data?: Pick<IQuery, "fetchBoard">;
    isOpen: boolean;
    address: string;
    zipcode: string;
    fileUrls: string[];
    onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface ISubmitButtonProps {
    isActive?: boolean;
}
