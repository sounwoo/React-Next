import { gql, useQuery } from "@apollo/client";
import {
    IBoard,
    IQuery,
    IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
    const { data } = useQuery<
        Pick<IQuery, "fetchBoards">,
        IQueryFetchBoardsArgs
    >(FETCH_BOARDS);

    const onClickBasket = (basket: IBoard) => () => {
        // 1. 기존 장바구니 가져오기
        const baskets: IBoard[] = JSON.parse(
            localStorage.getItem("baskets") ?? "[]"
        );

        // 2. 이미 담겼는지 확인
        const temp = baskets.filter((el) => el._id === basket._id);
        if (!temp.length) {
            // 안담겼으면 추가
            baskets.push(basket);
            localStorage.setItem("baskets", JSON.stringify(baskets));
        } else {
            const temp = baskets.filter((el) => el._id !== basket._id); // 담겨있는 상품이면 삭제
            localStorage.setItem("baskets", JSON.stringify(temp));
            return alert("이미 담으신 물품입니다");
        }
    };

    // 만약 장바구니 페이지에서 가져오기도 만들고 싶다면 ...?
    // localStorage.getItem() => 프리랜더링시 에러
    // 그러면 어떻게? useEffet

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <span style={{ margin: "10px" }}>{el.title}</span>
                    <span style={{ margin: "10px" }}>{el.writer}</span>
                    <button onClick={onClickBasket(el)}>장바구니 담기</button>
                </div>
            ))}
        </div>
    );
}
