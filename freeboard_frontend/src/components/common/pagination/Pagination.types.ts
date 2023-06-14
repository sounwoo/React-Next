import { ApolloQueryResult } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IPaginationProps {
    refetch: (
        variables?: Partial<IQueryFetchBoardsArgs> | undefined
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
    count: number;
}

export interface IPaginationUIProps {
    onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
    onClickPrevPage: () => void;
    onClickNextPage: () => void;
    activedPage: number;
    startPage: number;
    lastPage: number;
}
