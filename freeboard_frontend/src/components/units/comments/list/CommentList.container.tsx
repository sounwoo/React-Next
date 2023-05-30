import CommentListUI from "./CommentList.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
    IMutation,
    IMutationDeleteBoardCommentArgs,
    IQuery,
    IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import {
    DELETE_BOARD_COMMENT,
    FETCH_BOARD_COMMENTS,
} from "./CommentList.queries";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Modal } from "antd";

export default function CommentList(): JSX.Element {
    const router = useRouter();

    if (!router || typeof router.query.boardId !== "string") return <></>;

    const [isOpen, setIsOpen] = useState(false);
    const [commentId, setCommentId] = useState("");
    const [password, setPassword] = useState("");

    const [deleteBoardComment] = useMutation<
        Pick<IMutation, "deleteBoardComment">,
        IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT);

    const { data } = useQuery<
        Pick<IQuery, "fetchBoardComments">,
        IQueryFetchBoardCommentsArgs
    >(FETCH_BOARD_COMMENTS, {
        variables: { boardId: router.query.boardId },
    });

    const onClickCommentDelete = async () => {
        try {
            await deleteBoardComment({
                variables: {
                    password,
                    boardCommentId: commentId,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
            Modal.success({ content: "삭제완료!" });
            setIsOpen((prve) => !prve);
        } catch (error) {
            if (error instanceof Error) {
                Modal.error({ content: error.message });
                setIsOpen((prve) => !prve);
            }
        }
    };

    const onToggleModal = (event: MouseEvent<HTMLImageElement>): void => {
        setCommentId(event.currentTarget.id);
        onCancel();
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    };

    const onCancel = () => {
        setIsOpen((prve) => !prve);
    };

    return (
        <CommentListUI
            data={data}
            onClickCommentDelete={onClickCommentDelete}
            onToggleModal={onToggleModal}
            isOpen={isOpen}
            onChangePassword={onChangePassword}
            onCancel={onCancel}
        />
    );
}
