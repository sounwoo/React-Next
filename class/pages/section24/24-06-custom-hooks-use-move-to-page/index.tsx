import { useMoveToPage } from "../../../src/components/common/hooks/useMoveToPage";

export default function CustomHooksUseAuthPage(): JSX.Element {
    const { onClickMoveToPage } = useMoveToPage();

    return (
        <>
            <button onClick={onClickMoveToPage("/boards")}>자유게시판</button>
            <button onClick={onClickMoveToPage("/markets")}>
                게시판으로 이동
            </button>
            <button onClick={onClickMoveToPage("mypages")}>
                마이페이지으로 이동
            </button>
        </>
    );
}
