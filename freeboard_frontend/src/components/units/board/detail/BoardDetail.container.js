import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { FETCH_BOARD } from './BoardDetail.queries';
import BoardDetailUI from './BoardDetail.presenter';

export default function BoardDetail() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

    const onClickMove = () => {
        router.push(`/boards/${data.fetchBoard._id}/edit`);
    };

    return <BoardDetailUI data={data} onClickMove={onClickMove} />;
}
