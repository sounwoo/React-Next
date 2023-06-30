import { gql, useApolloClient } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
    query {
        fetchUserLoggedIn {
            email
            name
        }
    }
`;

export default function LoginSuccessPage() {
    // 1. 페이지 접속하면 자동으로 data에 받아지고(data는 글로벌스테이트 저장), 리렌더링됨
    // const { data } =
    //     useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

    // 2. 버튼 클릭시 data에 받아지고(data는 글로벌스테이트 저장), 리렌더링됨
    // const [나의함수, { data }] = useLazyQuery(FETCH_USER_LOGGED_IN);

    // 3. axios처럼 사용하는 방법
    // const client = useApolloClient()
    // client.query() <==> axios.get()

    const client = useApolloClient();

    const onClickButton = async (): Promise<void> => {
        const result = await client.query({
            query: FETCH_USER_LOGGED_IN,
        });
        console.log(result);
    };

    return (
        <>
            <button onClick={onClickButton}>버튼을 클릭하세요</button>
            {/* <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div> */}
        </>
    );
}
