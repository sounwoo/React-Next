import { gql, useQuery } from '@apollo/client';

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number: $number) {
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutedPage() {
    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: 3702 },
    });
    console.log(data);

    return (
        <>
            <div>1번 게시글 이동완료</div>
            <div>작성자 : {data?.fetchBoard.writer}</div>
            <div>제목 : {data?.fetchBoard.title}</div>
            <div>내용 : {data?.fetchBoard.contents}</div>
        </>
    );
}
