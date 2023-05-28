import { ChangeEvent, MouseEvent } from 'react';

export interface IBoardWriteProps {
    isEdit: boolean;
    data?: any;
}

export interface IUpdateBoardInput {
    title: string;
    contents: string;
}

export interface IBoardWriteUIProps {
    writerError: undefined | string;
    passwordError: undefined | string;
    titleError: undefined | string;
    contentsError: undefined | string;
    youtubeError: undefined | string;
    adressError: undefined | string;
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
    isActive: boolean;
    isEdit: boolean;
    data?: any;
}

export interface IRadiobutton {
    writer?: string;
}
