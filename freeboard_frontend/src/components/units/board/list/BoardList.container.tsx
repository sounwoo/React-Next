import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { FETCH_BOARDS } from './BoardList.queries';
import BoardDetailUI from './BoardList.presenter';
import { IQuery, IQueryFetchBoardsArgs } from '../../../../commons/types/generated/types';
import { MouseEvent } from 'react';

export default function BoardList() {
    const router = useRouter();
    const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
        FETCH_BOARDS
    );

    const onClickMoveToBoardsNew = () => {
        router.push('/boards/new');
    };

    const onClickMoveToBoardsDetail = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target instanceof HTMLDivElement)
            router.push(`/boards/${event.target.id}`);
    };

    return (
        <BoardDetailUI
            data={data}
            onClickMoveToBoardsNew={onClickMoveToBoardsNew}
            onClickMoveToBoardsDetail={onClickMoveToBoardsDetail}
        />
    );
}
