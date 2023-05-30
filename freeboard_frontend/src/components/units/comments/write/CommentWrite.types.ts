import { ChangeEvent, MouseEvent } from "react";

export interface CommentWrtieUIProps {
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
    onChangeRating: (value: number) => void;
    rating: number;
    contents: string;
}
