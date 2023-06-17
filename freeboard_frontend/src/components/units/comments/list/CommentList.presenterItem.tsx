import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import * as S from "./CommentList.styles";
import { Rate } from "antd";
import {
    DELETE_BOARD_COMMENT,
    FETCH_BOARD_COMMENTS,
    UPDATE_BOARD_COMMENT,
} from "./CommentList.queries";
import { useMutation } from "@apollo/client";
import {
    IMutation,
    IMutationDeleteBoardCommentArgs,
    IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { ICommentListItemProps } from "./CommentList.types";
import { getDate } from "../../util/utiles";

export default function CommentListItem(
    props: ICommentListItemProps
): JSX.Element {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

    const [inputs, setInputs] = useState({
        password: "",
        contents: "",
    });
    const [rating, setRating] = useState<number>(0);

    const [deleteBoardComment] = useMutation<
        Pick<IMutation, "deleteBoardComment">,
        IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT);

    const [updateBoardComment] = useMutation<
        Pick<IMutation, "updateBoardComment">,
        IMutationUpdateBoardCommentArgs
    >(UPDATE_BOARD_COMMENT);

    const onClickCommentDelete = async () => {
        try {
            await deleteBoardComment({
                variables: {
                    password: inputs.password,
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

    const onClickCommentEdit = async (): Promise<void> => {
        try {
            await updateBoardComment({
                variables: {
                    password: inputs.password,
                    boardCommentId: props.el._id,
                    updateBoardCommentInput: {
                        contents: inputs.contents,
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
            Modal.success({ content: "수정완료!" });
            setIsOpenDeleteModal((prve) => !prve);
            setIsOpen((prev) => !prev);
        } catch (error) {
            if (error instanceof Error) {
                Modal.error({ content: error.message });
                setIsOpenDeleteModal((prve) => !prve);
            }
        }
    };

    const onClickEditButtn = (): void => {
        setIsOpenDeleteModal(true);
    };

    const onIsOpen = (): void => {
        setIsOpen((prev) => !prev);
    };

    const onToggleModal = (): void => {
        setIsOpenDeleteModal((prev) => !prev);
    };

    const onChangeInputs = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        setInputs({
            ...inputs,
            [event.target.id]: event.target.value,
        });
    };

    return (
        <>
            {isOpenDeleteModal && (
                <S.PasswordModal
                    open={true}
                    onOk={isOpen ? onClickCommentEdit : onClickCommentDelete}
                    onCancel={onToggleModal}
                >
                    비밀번호 입력:
                    <S.PasswordInput
                        type="password"
                        id="password"
                        onChange={onChangeInputs}
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
                        {isOpen ? (
                            <S.Content
                                id="contents"
                                onChange={onChangeInputs}
                                defaultValue={props.el.contents}
                            />
                        ) : (
                            <S.Comment>{props.el.contents}</S.Comment>
                        )}
                    </S.Item>
                </S.Info>
                <S.Bottom>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "row",
                            alignItems: "center",
                        }}
                    >
                        <S.CreatedAt>{getDate(props.el.createdAt)}</S.CreatedAt>
                        {isOpen ? (
                            <Rate
                                onChange={setRating}
                                value={rating}
                                style={{ marginLeft: "10px" }}
                            />
                        ) : (
                            <S.Star disabled defaultValue={props.el.rating} />
                        )}
                    </div>
                    {isOpen ? (
                        <S.EditBT onClick={onClickEditButtn}>수정하기</S.EditBT>
                    ) : (
                        <></>
                    )}
                </S.Bottom>
            </S.Warpper>
        </>
    );
}
