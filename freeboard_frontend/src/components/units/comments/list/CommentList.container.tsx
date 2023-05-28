import CommentListUI from './CommentList.presenter';
import { useMutation, useQuery } from '@apollo/client';
import {
    IMutation,
    IMutationDeleteBoardCommentArgs,
    IQuery,
    IQueryFetchBoardCommentsArgs,
} from '../../../../commons/types/generated/types';
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from './CommentList.queries';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

export default function CommentList() {
    const router = useRouter();
    if (!router || typeof router.query.boardId !== 'string') return <></>;
    const [deleteBoardComment] = useMutation<
        Pick<IMutation, 'deleteBoardComment'>,
        IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT);

    const { data } = useQuery<
        Pick<IQuery, 'fetchBoardComments'>,
        IQueryFetchBoardCommentsArgs
    >(FETCH_BOARD_COMMENTS, {
        variables: { boardId: router.query.boardId },
    });

    const onClickCommentDelete = async (event: MouseEvent<HTMLImageElement>) => {
        const password = prompt('비밀번호를 입력하세요.');

        try {
            if (!(event.target instanceof HTMLImageElement)) return alert('시스템 문제');
            await deleteBoardComment({
                variables: {
                    password,
                    boardCommentId: event.target.id,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    try {
    } catch (error) {}

    return <CommentListUI data={data} onClickCommentDelete={onClickCommentDelete} />;
}
