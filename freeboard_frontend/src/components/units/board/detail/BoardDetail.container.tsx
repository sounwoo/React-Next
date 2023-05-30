import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import {
    IQuery,
    IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail(): JSX.Element {
    const router = useRouter();
    if (router === undefined || typeof router.query.boardId !== "string")
        return <></>;
    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
        FETCH_BOARD,
        {
            variables: { boardId: router.query.boardId },
        }
    );

    const onClickMove = (): void => {
        router.push(`/boards/${data?.fetchBoard._id}/edit`);
    };

    return <BoardDetailUI data={data} onClickMove={onClickMove} />;
}
