import { gql, useMutation, useQuery } from '@apollo/client';
import { Fragment } from 'react';

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

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int) {
        deleteBoard(number: $number) {
            message
        }
    }
`;

export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARDS);

    const [deleteBoard] = useMutation(DELETE_BOARD);

    console.log(data?.fetchBoards);

    // const mystyles = {
    //     margin: '10px',
    // };

    const onClickDelete = (event) => {
        deleteBoard({
            variables: { number: +event.target.id },
            refetchQueries: [{ query: FETCH_BOARDS }],
        });
    };

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                // 특별한 이유가 없으면? Fragment로 감싸자! <div />는 1개 더 그려야되서 조금 느려짐
                // 프레그먼드란? <></>, <Fragment></Fragment>
                // 프레그먼트에 ket입력하는 방법? <Fragment key={el.number}>
                <div key={el.number}>
                    {/* index는 게시글을 삭제할 때, 다음 게시글이 올라오면서 기존 index와 동일한 값을 갖게 됨. 즉, 유일하지 않음 */}
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{ margin: '10px' }}>{el.number}</span>
                    <span style={{ margin: '10px' }}>{el.title}</span>
                    <span style={{ margin: '10px' }}>{el.writer}</span>
                    <span>
                        <button id={el.number} onClick={onClickDelete}>
                            삭제
                        </button>
                    </span>
                </div>
            ))}
            {/* <div>1번 게시글 이동완료</div>
            <div>작성자 : {data?.fetchBoard.writer}</div>
            <div>제목 : {data?.fetchBoard.title}</div>
            <div>내용 : {data?.fetchBoard.contents}</div> */}
        </div>
    );
}
