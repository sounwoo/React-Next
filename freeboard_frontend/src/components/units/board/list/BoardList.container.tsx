import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./BoardList.queries";
import BoardDetailUI from "./BoardList.presenter";
import {
    IQuery,
    IQueryFetchBoardsArgs,
    IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";
import { FETCH_BOARDS_COUNT } from "../../../common/pagination/Pagination.queries";

export default function BoardList(): JSX.Element {
    const router = useRouter();
    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const { data: dataBoardsCount } = useQuery<
        Pick<IQuery, "fetchBoardsCount">,
        IQueryFetchBoardsCountArgs
    >(FETCH_BOARDS_COUNT);

    const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 1) / 10);

    const onClickMoveToBoardsNew = () => {
        router.push("/boards/new");
    };

    const onClickMoveToBoardsDetail = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target instanceof HTMLDivElement)
            router.push(`/boards/${event.target.id}`);
    };

    return (
        <BoardDetailUI
            data={data}
            onClickMoveToBoardsNew={onClickMoveToBoardsNew}
            onClickMoveToBoardsDetail={onClickMoveToBoardsDetail}
            refetch={refetch}
            lastPage={lastPage}
        />
    );
}
