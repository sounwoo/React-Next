import { ChangeEvent, MouseEvent } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';

export interface IBoardWriteProps {
    isEdit: boolean;
    data?: Pick<IQuery, 'fetchBoard'>;
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
    adressError: string;
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickSubmit: () => void;
    onClickUpdate: () => void;
    isActive: boolean;
    isEdit: boolean;
    data?: Pick<IQuery, 'fetchBoard'>;
}

export interface ISubmitButtonProps {
    isActive?: boolean;
}
