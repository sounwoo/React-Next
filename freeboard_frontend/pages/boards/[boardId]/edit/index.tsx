import { useQuery } from '@apollo/client';
import { FETCH_BOARD } from '../../../../src/components/units/board/detail/BoardDetail.queries';
import BoardWrite from '../../../../src/components/units/board/write/BoardWrite.container';
import { useRouter } from 'next/router';
import {
    IQuery,
    IQueryFetchBoardArgs,
} from '../../../../src/commons/types/generated/types';

export default function GraphqlEditPage() {
    const router = useRouter();
    if (!router || typeof router.query.boardId !== 'string') return <></>;
    const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(
        FETCH_BOARD,
        {
            variables: { boardId: router.query.boardId },
        }
    );
    return <BoardWrite isEdit={true} data={data} />;
}
