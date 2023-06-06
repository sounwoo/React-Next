import { ChangeEvent, MouseEvent } from "react";

export interface CommentWrtieUIProps {
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
    setRating: (value: number) => void;
    rating: number;
    writer: string;
    password: string;
    contents: string;
}
