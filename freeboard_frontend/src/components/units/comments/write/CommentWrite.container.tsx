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

export default function CommentWrite() {
    const router = useRouter();

    const [writer, setWriter] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [contents, setContents] = useState<string>("");
    const [rating, setRating] = useState<number>(0);

    const [createBoardComment] = useMutation<
        Pick<IMutation, "createBoardComment">,
        IMutationCreateBoardCommentArgs
    >(CREATE_BOARD_COMMENT);

    const onChangeWriter = (evnet: ChangeEvent<HTMLInputElement>): void => {
        setWriter(evnet.target.value);
    };

    const onChangePassword = (evnet: ChangeEvent<HTMLInputElement>): void => {
        setPassword(evnet.target.value);
    };

    const onChangeContents = (
        evnet: ChangeEvent<HTMLTextAreaElement>
    ): void => {
        setContents(evnet.target.value);
    };

    const onClickSubmit = async () => {
        if (!writer) return Modal.error({ content: "작성자를 입력해주세요" });
        if (!password)
            return Modal.error({ content: "비밀번호를 입력해주세요" });
        if (!contents) return Modal.error({ content: "내용을 입력해주세요" });
        try {
            if (typeof router.query.boardId !== "string") return <></>;
            await createBoardComment({
                variables: {
                    boardId: router.query.boardId,
                    createBoardCommentInput: {
                        writer,
                        password,
                        contents,
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
            setContents("");
            setPassword("");
            setRating(0);
            setWriter("");
        } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
        }
    };

    return (
        <CommentWriteUI
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            setRating={setRating}
            rating={rating}
            writer={writer}
            password={password}
            contents={contents}
        />
    );
}
