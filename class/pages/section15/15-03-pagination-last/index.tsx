import { gql, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardsArgs,
    IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import { useState, type MouseEvent } from "react";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
            contents
        }
    }
`;

const FETCH_BOARDS_COUNT = gql`
    query {
        fetchBoardsCount
    }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
    const [startPage, setStartPage] = useState(1);

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const { data: dataBoardsCount } = useQuery<
        Pick<IQuery, "fetchBoardsCount">,
        IQueryFetchBoardsCountArgs
    >(FETCH_BOARDS_COUNT);

    const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 1) / 10);

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: +event.currentTarget.id });
    };

    const onClickPrevPage = (): void => {
        if (startPage === 1) return;
        const prevePage = startPage - 10;
        setStartPage(prevePage);
        void refetch({ page: prevePage });
    };

    const onClickNextPage = (): void => {
        if (!(startPage + 10 <= lastPage)) return;
        const nextPage = startPage + 10;
        setStartPage(nextPage);
        void refetch({ page: nextPage });
    };

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <span style={{ margin: "10px" }}>{el.title}</span>
                    <span style={{ margin: "10px" }}>{el.writer}</span>
                </div>
            ))}
            <span onClick={onClickPrevPage}> 이전페이지 </span>
            {new Array(10).fill(1).map((_, index) => {
                const temp = index + startPage;
                return (
                    temp <= lastPage && (
                        <span
                            key={temp}
                            id={String(temp)}
                            onClick={onClickPage}
                            style={{ margin: "5px" }}
                        >
                            {temp}
                        </span>
                    )
                );
            })}
            <span onClick={onClickNextPage}>다음페이지</span>
        </div>
    );
}
