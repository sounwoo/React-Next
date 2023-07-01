import { useCallback, useMemo, useState } from "react";
import MemoizationWithChildPage from "./02-child";

export default function MemoizationPage(): JSX.Element {
    console.log("부모 컴포넌트 렌더링");
    let countLet = 0;
    const [countState, setCountState] = useState(0);

    const onClickCountLet = useCallback((): void => {
        countLet += 1;
    }, []);

    const onClickCountState = useCallback((): void => {
        setCountState((prev) => prev + 1);
    }, []);

    return (
        <>
            <div>=============================</div>
            <h1>부모 컴포넌트</h1>
            <div>카운트(let) : {countLet}</div>
            <button onClick={onClickCountLet}>카운트(let) +1 올리기</button>

            <div>카운트(state) : {countState}</div>
            <button onClick={onClickCountState}>카운트(state) +1 올리기</button>
            <div>=============================</div>
            <MemoizationWithChildPage />
        </>
    );
}
