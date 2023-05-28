import { gql, useQuery } from '@apollo/client';
import BoardWrite from '../../../../../src/components/units/board/10-write/BoardWrite.container';
import { useRouter } from 'next/router';

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number: $number) {
            writer
            title
            contents
        }
    }
`;

export default function GraphqlMutationPage() {
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) },
    });

    return (
        <>
            <div>###### 여기는 페이지</div>
            <BoardWrite isEdit={true} data={data} />
            <div>###### 여기는 페이지</div>
        </>
    );
}
