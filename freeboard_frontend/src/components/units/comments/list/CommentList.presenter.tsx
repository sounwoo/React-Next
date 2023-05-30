import { getDate } from "../../util/utiles";
import * as S from "./CommentList.styles";
import { CommentListUIProps } from "./CommentList.types";

export default function CommentListUI(props: CommentListUIProps) {
    return (
        <div>
            {props.isOpen && (
                <S.PasswordModal
                    open={true}
                    onOk={props.onClickCommentDelete}
                    onCancel={props.onCancel}
                >
                    비밀번호 입력:
                    <S.PasswordInput
                        type="password"
                        onChange={props.onChangePassword}
                    />
                </S.PasswordModal>
            )}
            {props.data?.fetchBoardComments.map((el) => (
                <S.Warpper key={el._id}>
                    <S.Info>
                        <S.Avatar src="/images/avatar.png" />
                        <S.Item>
                            <S.ItemWarpper>
                                <S.Writer>{el.writer}</S.Writer>
                                <S.Option>
                                    <S.EditButton src="/images/option/option_edit_icon.png" />
                                    <S.DeleteButton
                                        id={el._id}
                                        src="/images/option/option_delete_icon.png"
                                        onClick={props.onToggleModal}
                                    />
                                </S.Option>
                            </S.ItemWarpper>
                            <S.Comment>{el.contents}</S.Comment>
                        </S.Item>
                    </S.Info>
                    <S.Bottom>
                        <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
                        <S.Star disabled defaultValue={el.rating} />
                    </S.Bottom>
                </S.Warpper>
            ))}
        </div>
    );
}
