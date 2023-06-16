import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import * as S from "./CommentList.styles";
import {
    DELETE_BOARD_COMMENT,
    FETCH_BOARD_COMMENTS,
} from "./CommentList.queries";
import { useMutation } from "@apollo/client";
import {
    IMutation,
    IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { ICommentListItemProps } from "./CommentList.types";
import { getDate } from "../../util/utiles";

export default function CommentListItem(
    props: ICommentListItemProps
): JSX.Element {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(true);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [password, setPassword] = useState("");

    const [deleteBoardComment] = useMutation<
        Pick<IMutation, "deleteBoardComment">,
        IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT);

    const onClickCommentDelete = async () => {
        try {
            await deleteBoardComment({
                variables: {
                    password,
                    boardCommentId: props.el._id,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
            Modal.success({ content: "삭제완료!" });
            setIsOpenDeleteModal((prve) => !prve);
        } catch (error) {
            if (error instanceof Error) {
                Modal.error({ content: error.message });
                setIsOpenDeleteModal((prve) => !prve);
            }
        }
    };

    const onIsOpen = (): void => {};
    const onToggleModal = (): void => {
        if (isOpen) setIsOpenDeleteModal((prev) => !prev);
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    };

    return (
        <>
            {isOpenDeleteModal && (
                <S.PasswordModal
                    open={true}
                    onOk={onClickCommentDelete}
                    onCancel={onToggleModal}
                >
                    비밀번호 입력:
                    <S.PasswordInput
                        type="password"
                        onChange={onChangePassword}
                    />
                </S.PasswordModal>
            )}

            <S.Warpper key={props.el._id}>
                <S.Info>
                    <S.Avatar src="/images/avatar.png" />
                    <S.Item>
                        <S.ItemWarpper>
                            <S.Writer>{props.el.writer}</S.Writer>
                            <S.Option>
                                <S.EditButton
                                    src="/images/option/option_edit_icon.png"
                                    onClick={onIsOpen}
                                />
                                <S.DeleteButton
                                    src="/images/option/option_delete_icon.png"
                                    onClick={onToggleModal}
                                />
                            </S.Option>
                        </S.ItemWarpper>
                        <S.Comment>{props.el.contents}</S.Comment>
                    </S.Item>
                </S.Info>
                <S.Bottom>
                    <S.CreatedAt>{getDate(props.el.createdAt)}</S.CreatedAt>
                    <S.Star disabled defaultValue={props.el.rating} />
                </S.Bottom>
            </S.Warpper>
        </>
    );
}
