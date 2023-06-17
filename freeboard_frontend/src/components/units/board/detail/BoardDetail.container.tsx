import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
    DELETE_BOARD,
    DIS_LIKE_BOARD,
    FETCH_BOARD,
    LIKE_BOARD,
} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";
import {
    IMutation,
    IMutationDeleteBoardArgs,
    IMutationDislikeBoardArgs,
    IMutationLikeBoardArgs,
    IQuery,
    IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

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

    const [deleteBoard] = useMutation<
        Pick<IMutation, "deleteBoard">,
        IMutationDeleteBoardArgs
    >(DELETE_BOARD);

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
        FETCH_BOARD,
        {
            variables: { boardId: router.query.boardId },
        }
    );
    const onClickMove = (): void => {
        router.push(`/boards/${data?.fetchBoard._id}/edit`);
    };

    const onClickBoardListMove = (): void => {
        router.push("/boards");
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

    const onClickDeleteBoard = async (): Promise<void> => {
        if (typeof router.query.boardId !== "string") return;
        try {
            await deleteBoard({
                variables: { boardId: router.query.boardId },
            });
            Modal.success({ content: "삭제 완료!" });
            router.push("/boards");
        } catch (error) {
            if (error instanceof Error) Modal.error({ content: "서버 오류!" });
        }
    };

    return (
        <BoardDetailUI
            data={data}
            onClickMove={onClickMove}
            onClickLike={onClickLike}
            onClickDislike={onClickDislike}
            onClickBoardListMove={onClickBoardListMove}
            onClickDeleteBoard={onClickDeleteBoard}
        />
    );
}
