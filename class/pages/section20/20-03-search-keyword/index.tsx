import { gql, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useState, type ChangeEvent, type MouseEvent } from "react";
import _ from "lodash";
import { v4 as uuid } from "uuid";

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
    const [keyword, setKeyword] = useState("");

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: +event.currentTarget.id });
    };

    const getDebounce = _.debounce((value) => {
        void refetch({ search: value, page: 1 });
        setKeyword(value);
    }, 500);

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
        getDebounce(event.currentTarget.value);
    };

    return (
        <div>
            검색어입력 : <input type="text" onChange={onChangeSearch} />
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <span style={{ margin: "10px" }}>
                        {el.title
                            .replaceAll(keyword, `!@#${keyword}!@#`)
                            .split("!@#")
                            .map((el) => (
                                <span
                                    key={uuid()}
                                    style={{
                                        color: el === keyword ? "red" : "black",
                                    }}
                                >
                                    {el}
                                </span>
                            ))}
                    </span>
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
