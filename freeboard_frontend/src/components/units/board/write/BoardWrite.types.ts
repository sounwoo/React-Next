import { ChangeEvent, MouseEvent } from "react";
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
    isActive: boolean;
    isEdit: boolean;
    data?: Pick<IQuery, "fetchBoard">;
    isOpen: boolean;
    onToggleModal: () => void;
    handleComplete: (data: Address) => void;
    address: string;
    zipcode: string;
}

export interface ISubmitButtonProps {
    isActive?: boolean;
}
