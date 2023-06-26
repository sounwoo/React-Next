import Pagination from "../../../common/pagination/Pagination.container";
import PaginationUI from "../../../common/pagination/Pagination.presenter";
import { getDate } from "../../util/utiles";
import * as S from "./BoardList.styles";
import { IBoardListUIProps } from "./BoardList.types";
import { v4 as uuid } from "uuid";

const SECRET = "@#$%";

export default function BoardListUI(props: IBoardListUIProps): JSX.Element {
    return (
        <S.Wrapper>
            <S.SearchWarpper>
                <S.SearchInput
                    type="search"
                    placeholder="🔍 제목을 검색해주세요."
                    onChange={props.onChangeSearch}
                    value={props.search}
                />
                <S.SeachDate placeholder="YYYY. MM.DD ~ YYYY. MM.DD"></S.SeachDate>
                <S.SeachButton onClick={props.onClickSearch}>
                    검색하기
                </S.SeachButton>
            </S.SearchWarpper>
            <S.TableTop />
            <S.TableHeader>
                <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
                <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
                <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
                <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
            </S.TableHeader>
            {props.data?.fetchBoards.map((el) => (
                <S.TableHeader key={el._id}>
                    <S.ColumnBasic>
                        {el._id.slice(-4).toUpperCase()}
                    </S.ColumnBasic>
                    <S.ColumnTitle
                        id={el._id}
                        onClick={props.onClickMoveToBoardsDetail}
                    >
                        {el.title
                            .replaceAll(
                                props.search,
                                `${SECRET}${props.search}${SECRET}`
                            )
                            .split(SECRET)
                            .map((el: string) => (
                                <S.TextToken
                                    key={uuid()}
                                    isSearch={props.search === el}
                                >
                                    {el}
                                </S.TextToken>
                            ))}
                    </S.ColumnTitle>
                    <S.ColumnBasic>{el.writer}</S.ColumnBasic>
                    <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
                </S.TableHeader>
            ))}
            <S.TableBottom />
            <S.Footer>
                <Pagination refetch={props.refetch} count={props.count} />
                <S.Button onClick={props.onClickMoveToBoardsNew}>
                    <S.PencilIcon src="/images/boards/list/write.png" />
                    게시물 작성하기
                </S.Button>
            </S.Footer>
        </S.Wrapper>
    );
}
