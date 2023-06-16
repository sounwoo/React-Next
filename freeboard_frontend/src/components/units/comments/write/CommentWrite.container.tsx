import { ChangeEvent, useState } from "react";
import CommentWriteUI from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./CommentWrite.queries";
import {
    IMutation,
    IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.queries";
import { Modal } from "antd";
import { ICommentWriteProps } from "./CommentWrite.types";

export default function CommentWrite(props: ICommentWriteProps): JSX.Element {
    const router = useRouter();

    const [inputs, setInputs] = useState({
        writer: "",
        password: "",
        contents: "",
    });
    const [rating, setRating] = useState<number>(0);

    const [createBoardComment] = useMutation<
        Pick<IMutation, "createBoardComment">,
        IMutationCreateBoardCommentArgs
    >(CREATE_BOARD_COMMENT);

    const onChangeInputs = (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ): void => {
        setInputs((prev) => ({
            ...inputs,
            [event.target.id]: event.target.value,
        }));
    };

    const onClickSubmit = async () => {
        if (!inputs.writer)
            return Modal.error({ content: "작성자를 입력해주세요" });
        if (!inputs.password)
            return Modal.error({ content: "비밀번호를 입력해주세요" });
        if (!inputs.contents)
            return Modal.error({ content: "내용을 입력해주세요" });
        try {
            if (typeof router.query.boardId !== "string") return <></>;
            await createBoardComment({
                variables: {
                    boardId: router.query.boardId,
                    createBoardCommentInput: {
                        ...inputs,
                        rating,
                    },
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
            Modal.success({ content: "댓글 작성 완료!" });
            inputs.writer = "";
            inputs.password = "";
            inputs.contents = "";
            setRating(0);
        } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
        }
    };

    return (
        <CommentWriteUI
            onChangeInputs={onChangeInputs}
            onClickSubmit={onClickSubmit}
            setInputs={setInputs}
            rating={rating}
            setRating={setRating}
            inputs={inputs}
        />
    );
}
