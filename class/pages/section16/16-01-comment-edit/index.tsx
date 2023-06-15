import { gql, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import type { MouseEvent } from "react";
import { useState } from "react";

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
    const [myIndex, setMyIndex] = useState(-1);

    const { data } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
        setMyIndex(+event.currentTarget.id);
    };

    return (
        <div>
            {data?.fetchBoards.map((el, index) =>
                index !== myIndex ? (
                    <div key={el._id}>
                        <span style={{ margin: "10px" }}>{el.title}</span>
                        <span style={{ margin: "10px" }}>{el.writer}</span>
                        <button id={String(index)} onClick={onClickEdit}>
                            수정하기
                        </button>
                    </div>
                ) : (
                    <input key={el._id} type="text" />
                )
            )}
        </div>
    );
}
