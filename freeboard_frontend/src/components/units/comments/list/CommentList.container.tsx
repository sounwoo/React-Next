import CommentListUI from './CommentList.presenter';
import { useQuery } from '@apollo/client';
import {
    IQuery,
    IQueryFetchBoardCommentsArgs,
} from '../../../../commons/types/generated/types';
import { FETCH_BOARD_COMMENTS } from './CommentList.queries';
import { useRouter } from 'next/router';

export default function CommentList() {
    const router = useRouter();
    const { data } = useQuery<
        Pick<IQuery, 'fetchBoardComments'>,
        IQueryFetchBoardCommentsArgs
    >(FETCH_BOARD_COMMENTS, {
        variables: { boardId: String(router.query.boardId) },
    });
    console.log(data?.fetchBoardComments);
    return <CommentListUI data={data} />;
}
