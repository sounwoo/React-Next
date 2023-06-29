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
            <div style={{ color: " red" }}>
                작성자 : {data?.fetchBoard?.writer}
            </div>
            <div style={{ color: "green" }}>
                제목 : {data?.fetchBoard?.title}
            </div>

            {typeof window !== "undefined" ? (
                <div
                    style={{ color: " blue" }}
                    dangerouslySetInnerHTML={{
                        __html: Dompurify.sanitize(data?.fetchBoard?.contents),
                    }}
                />
            ) : (
                <div style={{ color: "blue" }} />
            )}
            <div style={{ color: " brown" }}>주소 : 구로구</div>
        </>
    );
}
