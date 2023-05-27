import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { FETCH_BOARDS } from './BoardList.queries';
import BoardDetailUI from './BoardList.presenter';

export default function BoardList() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARDS);

    const onClickMoveToBoardsNew = () => {
        router.push('/boards/new');
    };

    const onClickMoveToBoardsDetail = (event) => {
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
