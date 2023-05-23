import { useRouter } from 'next/router';

export default function StaticRoutingPage() {
    const roter = useRouter();

    const onClickMove1 = () => {
        roter.push('/section05/05-03-static-routing-board-query-moved/1');
    };

    const onClickMove2 = () => {
        roter.push('/section05/05-03-static-routing-board-query-moved/2');
    };

    const onClickMove3 = () => {
        roter.push('/section05/05-03-static-routing-board-query-moved/3');
    };

    return (
        <>
            <button onClick={onClickMove1}>1번 게시글로 이동하기!!</button>
            <br />
            <button onClick={onClickMove2}>2번 게시글로 이동하기!!</button>
            <br />
            <button onClick={onClickMove3}>3번 게시글로 이동하기!!</button>
        </>
    );
}
