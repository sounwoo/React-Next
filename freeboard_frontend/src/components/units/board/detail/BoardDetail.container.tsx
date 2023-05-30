import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { DIS_LIKE_BOARD, FETCH_BOARD, LIKE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import {
    IMutation,
    IMutationDislikeBoardArgs,
    IMutationLikeBoardArgs,
    IQuery,
    IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail(): JSX.Element {
    const router = useRouter();
    if (typeof router.query.boardId !== "string") return <></>;

    const [likeBoard] = useMutation<
        Pick<IMutation, "likeBoard">,
        IMutationLikeBoardArgs
    >(LIKE_BOARD);

    const [dislikeBoard] = useMutation<
        Pick<IMutation, "dislikeBoard">,
        IMutationDislikeBoardArgs
    >(DIS_LIKE_BOARD);

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
        FETCH_BOARD,
        {
            variables: { boardId: router.query.boardId },
        }
    );
    const onClickMove = (): void => {
        router.push(`/boards/${data?.fetchBoard._id}/edit`);
    };

    const onClickLike = async (): Promise<void> => {
        if (typeof router.query.boardId !== "string") return;
        try {
            await likeBoard({
                variables: { boardId: router.query.boardId },
                refetchQueries: [
                    {
                        query: FETCH_BOARD,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
        } catch (err) {
            if (err instanceof Error) alert(err.message);
        }
    };

    const onClickDislike = async (): Promise<void> => {
        if (typeof router.query.boardId !== "string") return;
        try {
            await dislikeBoard({
                variables: { boardId: router.query.boardId },
                refetchQueries: [
                    {
                        query: FETCH_BOARD,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
        } catch (err) {
            if (err instanceof Error) alert(err.message);
        }
    };

    return (
        <BoardDetailUI
            data={data}
            onClickMove={onClickMove}
            onClickLike={onClickLike}
            onClickDislike={onClickDislike}
        />
    );
}
