import { gql, useMutation, useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

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

const CREATE_BOARD = gql`
    # 타입정의
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        # 실제 우리가 전달할 변수 적는 곳
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            contents
            title
        }
    }
`;

const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!) {
        deleteBoard(boardId: $boardId)
    }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
    const { data } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const [createBoard] = useMutation(CREATE_BOARD);

    const [deleteBoard] = useMutation(DELETE_BOARD);

    const onClickSubmit = (): void => {
        void createBoard({
            variables: {
                createBoardInput: {
                    writer: "철수",
                    password: "1234",
                    title: "제목",
                    contents: "내용",
                },
            },
            // refetchQueries: [{ query: FETCH_BOARDS }],
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        fetchBoards: (prev) => {
                            return [data.createBoard, ...prev];
                        },
                    },
                });
            },
        });
    };

    interface IPrev {
        __ref: string;
    }

    const onClickDelete = (boardId: string) => (): void => {
        deleteBoard({
            variables: { boardId },
            // refetchQueries: [{ query: FETCH_BOARDS }],
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        fetchBoards: (prev: IPrev[], { readField }) => {
                            const deletedId = data.deleteBoard; // 삭제 완료된 ID
                            const filteredPrev = prev.filter(
                                (el) => readField("_id", el) !== deletedId
                            );
                            return [...filteredPrev]; // 삭제된 ID를 제외한 나머지 9개만 리턴
                        },
                    },
                });
            },
        });
    };

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <span style={{ margin: "10px" }}>{el.title}</span>
                    <span style={{ margin: "10px" }}>{el.writer}</span>
                    <button onClick={onClickDelete(el._id)}>삭제하기</button>
                </div>
            ))}
            <button onClick={onClickSubmit}>등록하기</button>
        </div>
    );
}
