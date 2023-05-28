import { getDate } from '../../util/utiles';
import * as S from './CommentList.styles';
import { CommentListUIProps } from './CommentList.types';

export default function CommentListUI(props: CommentListUIProps) {
    return (
        <div>
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
                                        onClick={props.onClickCommentDelete}
                                    />
                                </S.Option>
                            </S.ItemWarpper>
                            <S.Comment>{el.contents}</S.Comment>
                        </S.Item>
                    </S.Info>
                    <S.Bottom>
                        <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
                        <S.Star>{el.rating}</S.Star>
                    </S.Bottom>
                </S.Warpper>
            ))}
        </div>
    );
}
