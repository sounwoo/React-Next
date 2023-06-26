import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import BoardDetailUI from "./BoardList.presenter";
import {
    IQuery,
    IQueryFetchBoardsArgs,
    IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function BoardList(): JSX.Element {
    const router = useRouter();
    const [search, setSeacch] = useState("");
    const [count, setCount] = useState(0);

    const { data, refetch } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
        Pick<IQuery, "fetchBoardsCount">,
        IQueryFetchBoardsCountArgs
    >(FETCH_BOARDS_COUNT);
    console.log(dataBoardsCount);

    const onClickMoveToBoardsNew = () => {
        router.push("/boards/new");
    };

    const onClickMoveToBoardsDetail = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target instanceof HTMLDivElement)
            router.push(`/boards/${event.target.id}`);
    };

    const onChangeSearch = (evnet: ChangeEvent<HTMLInputElement>): void => {
        setSeacch(evnet.currentTarget.value);
    };

    const onClickSearch = (): void => {
        void refetch({ search, page: 1 });
        void refetchBoardsCount({ search });
    };

    return (
        <BoardDetailUI
            data={data}
            onClickMoveToBoardsNew={onClickMoveToBoardsNew}
            onClickMoveToBoardsDetail={onClickMoveToBoardsDetail}
            refetch={refetch}
            count={dataBoardsCount?.fetchBoardsCount ?? 1}
            search={search}
            onChangeSearch={onChangeSearch}
            onClickSearch={onClickSearch}
        />
    );
}
