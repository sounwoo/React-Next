import { gql, useApolloClient, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import _ from "lodash";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            writer
            title
            contents
        }
    }
`;

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
    const { data } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const router = useRouter();
    const client = useApolloClient();

    const getDebounce = _.debounce((boardId) => {
        client.query({
            query: FETCH_BOARD,
            variables: { boardId },
        });
    }, 3000);

    const prefetchBoard = (boardId: string) => async () => {
        getDebounce(boardId);
    };

    const onClickMove = (boardId: string) => () => {
        void router.push(`31-10-data-prefetch-moved/${boardId}`);
    };

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <span
                        style={{ margin: "10px" }}
                        onMouseOver={prefetchBoard(el._id)}
                        onClick={onClickMove(el._id)}
                    >
                        {el.title}
                    </span>
                    <span style={{ margin: "10px" }}>{el.writer}</span>
                </div>
            ))}
        </div>
    );
}
