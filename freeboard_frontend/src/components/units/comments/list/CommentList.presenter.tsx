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
                                <S.Star>{el.rating}</S.Star>
                            </S.ItemWarpper>
                            <S.Comment>{el.contents}</S.Comment>
                        </S.Item>
                    </S.Info>
                    <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
                </S.Warpper>
            ))}
        </div>
    );
}
