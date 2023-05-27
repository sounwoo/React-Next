import { getDate } from '../../util/utiles';
import * as S from './BoardList.styles';

export default function BoardListUI(props) {
    return (
        <S.Wrapper>
            <S.TableTop />
            <S.TableHeader>
                <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
                <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
                <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
                <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
            </S.TableHeader>
            {props.data?.fetchBoards.map((el) => (
                <S.TableHeader key={el._id}>
                    <S.ColumnBasic>{el._id.slice(-4).toUpperCase()}</S.ColumnBasic>
                    <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardsDetail}>
                        {el.title}
                    </S.ColumnTitle>
                    <S.ColumnBasic>{el.writer}</S.ColumnBasic>
                    <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
                </S.TableHeader>
            ))}
            <S.TableBottom />
            <S.Footer>
                <S.Button onClick={props.onClickMoveToBoardsNew}>
                    <S.PencilIcon src="/images/boards/list/write.png" />
                    게시물 작성하기
                </S.Button>
            </S.Footer>
        </S.Wrapper>
    );
}
