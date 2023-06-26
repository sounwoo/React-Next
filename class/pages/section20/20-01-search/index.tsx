import { gql, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useState, type ChangeEvent, type MouseEvent } from "react";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int, $search: String) {
        fetchBoards(page: $page, search: $search) {
            _id
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
    const [search, setSearch] = useState("");

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        // 검색에서 refetch할 때, search검색어가 refetch에 이미 저장되어 있는 상태이므로 추가로 search 포함하지 않아도 됨
        void refetch({ page: +event.currentTarget.id });
    };

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.currentTarget.value);
    };

    const onClickSearch = (): void => {
        void refetch({ page: 1, search });
    };

    return (
        <div>
            검색어입력 : <input type="text" onChange={onChangeSearch} />
            <button onClick={onClickSearch}>검색하기</button>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <span style={{ margin: "10px" }}>{el.title}</span>
                    <span style={{ margin: "10px" }}>{el.writer}</span>
                </div>
            ))}
            {new Array(10).fill(1).map((_, index) => (
                <span
                    key={index + 1}
                    id={String(index + 1)}
                    onClick={onClickPage}
                >
                    {index + 1}
                </span>
            ))}
        </div>
    );
}
