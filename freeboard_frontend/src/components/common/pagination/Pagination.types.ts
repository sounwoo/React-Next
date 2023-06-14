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
    lastPage: number;
}

export interface IPaginationUIProps extends IPaginationProps {
    onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
    onClickPrevPage: () => void;
    onClickNextPage: () => void;
    startPage: number;
}
