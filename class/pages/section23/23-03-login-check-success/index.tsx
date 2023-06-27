import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../src/commons/types/generated/types";
import { useEffect } from "react";
import { useRouter } from "next/router";

const FETCH_USER_LOGGED_IN = gql`
    query {
        fetchUserLoggedIn {
            email
            name
        }
    }
`;

export default function LoginSuccessPage() {
    const router = useRouter();
    const { data } =
        useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            alert("로그인후 이용가능합니다.");
            void router.push("23-03-login-check");
        }
    }, []);

    return <>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</>;
}
