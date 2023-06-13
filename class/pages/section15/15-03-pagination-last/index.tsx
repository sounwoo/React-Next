import { gql, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardsArgs,
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

export default function StaticRoutingMovedPage(): JSX.Element {
    const [startPage, setStartPage] = useState(1);

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: +event.currentTarget.id });
    };

    const onClickPrevPage = (): void => {
        const prevePage = startPage - 10;
        setStartPage(prevePage);
        void refetch({ page: prevePage });
    };

    const onClickNextPage = (): void => {
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
            <span onClick={onClickPrevPage}> 이전 페이지 </span>
            {new Array(10).fill(1).map((_, index) => (
                <span
                    key={index + startPage}
                    id={String(index + startPage)}
                    onClick={onClickPage}
                >
                    {index + startPage}
                </span>
            ))}
            <span onClick={onClickNextPage}>다음 페이지</span>
        </div>
    );
}
