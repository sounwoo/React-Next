import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface ICommentWriteProps {
    isOpen?: boolean;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
    el?: IBoardComment;
}

export interface CommentWrtieUIProps extends ICommentWriteProps {
    onChangeInputs: (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => void;
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
    setInputs: Dispatch<
        SetStateAction<{
            writer: string;
            password: string;
            contents: string;
        }>
    >;
    inputs: {
        writer?: string;
        password?: string;
        contents: string;
    };
    rating: number;
    setRating: Dispatch<SetStateAction<number>>;
}
