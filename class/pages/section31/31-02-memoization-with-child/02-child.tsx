import { memo } from "react";

function MemoizationWithChildPage(): JSX.Element {
    console.log("자식이 리렌더링");
    return (
        <>
            <div>=============================</div>
            <h1>자식 컴포넌트</h1>
            <div>=============================</div>
        </>
    );
}
// props가 넘어오게되면(사용하지 않더라도)리렌더링 된다
export default memo(MemoizationWithChildPage);
