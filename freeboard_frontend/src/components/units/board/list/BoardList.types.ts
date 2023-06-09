import { ChangeEvent, MouseEvent } from "react";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface IBoardListUIProps {
    onClickMoveToBoardsNew: () => void;
    onClickMoveToBoardsDetail: (event: MouseEvent<HTMLDivElement>) => void;
    refetch: (
        variables?: Partial<IQueryFetchBoardsArgs> | undefined
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
    count: number;
    data?: Pick<IQuery, "fetchBoards">;
    search: string;
    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickSearch: () => void;
}
