import { useRouter } from 'next/router';

export default function StaticRoutingPage() {
    const roter = useRouter();

    const onClickMove = () => {
        roter.push('/section05/05-02-static-routing-moved');
    };

    return <button onClick={onClickMove}>페이지 이동하기!!</button>;
}
