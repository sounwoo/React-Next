import CommentListUI from "./CommentList.presenter";
import { useQuery } from "@apollo/client";
import {
    IQuery,
    IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";
import { useRouter } from "next/router";

export default function CommentList(): JSX.Element {
    const router = useRouter();
    if (!router || typeof router.query.boardId !== "string") return <></>;

    const { data, fetchMore } = useQuery<
        Pick<IQuery, "fetchBoardComments">,
        IQueryFetchBoardCommentsArgs
    >(FETCH_BOARD_COMMENTS, {
        variables: { boardId: router.query.boardId },
    });

    const onLoadMore = (): void => {
        if (!data) return;
        console.log(data.fetchBoardComments);
        void fetchMore({
            variables: {
                page: Math.ceil(data.fetchBoardComments.length / 10) + 1,
            },
            updateQuery: (perv, { fetchMoreResult }) => {
                console.log(perv, fetchMoreResult);
                if (fetchMoreResult?.fetchBoardComments === undefined)
                    return { fetchBoardComments: [...perv.fetchBoardComments] };

                return {
                    fetchBoardComments: [
                        ...perv.fetchBoardComments,
                        ...fetchMoreResult.fetchBoardComments,
                    ],
                };
            },
        });
    };

    return <CommentListUI data={data} onLoadMore={onLoadMore} />;
}
