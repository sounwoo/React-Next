import { gql, useQuery } from '@apollo/client';

const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            number
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);
    console.log(data?.fetchBoards);

    // const mystyles = {
    //     margin: '10px',
    // };

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <div>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: '10px' }}>{el.number}</span>
                    <span style={{ margin: '10px' }}>{el.title}</span>
                    <span style={{ margin: '10px' }}>{el.writer}</span>
                </div>
            ))}
            {/* <div>1번 게시글 이동완료</div>
            <div>작성자 : {data?.fetchBoard.writer}</div>
            <div>제목 : {data?.fetchBoard.title}</div>
            <div>내용 : {data?.fetchBoard.contents}</div> */}
        </div>
    );
}
