import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../src/commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
    query {
        fetchUserLoggedIn {
            email
            name
        }
    }
`;

export default function LoginSuccessPage() {
    const { data } =
        useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

    return <>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</>;
}
