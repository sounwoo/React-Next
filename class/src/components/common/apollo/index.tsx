import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    ApolloLink,
    fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
    accessTokenState,
    restoreAccessTokenLoadable,
} from "../../../commons/stores";
import { useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
    children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

    const qqq = useRecoilValueLoadable(restoreAccessTokenLoadable);

    // 1. 프리렌더링 예제 - propess.brower 방법
    // if (process.browser) {
    //     console.log("나는 브라우저다");
    // } else console.log("yarn dev로 실행시킨 프로그램 내부다!");

    // 2. 프리렌더링 예제 - typeof window 방법
    // if (typeof window !== undefined) console.log("나는 브라우저다");
    // else console.log("yarn dev로 실행시킨 프로그램 내부다!");

    // 3. 프리렌더링 무시 - useEffect 방법
    useEffect(() => {
        // 1. 기존 방식(refreshToken 이전)
        // const result = localStorage.getItem("accessToken");

        // 2. 새로운방식(refreshToken 이후)
        void qqq.toPromise().then((newAccessToken) => {
            setAccessToken(newAccessToken ?? "");
        });
    }, []);

    const errorLink = onError(({ graphQLErrors, operation, forward }) => {
        // 1. 에러를 캐치
        if (typeof graphQLErrors !== "undefined") {
            for (const err of graphQLErrors) {
                // 1-2. 해당 에러가 토큰만료 에러인지 체크()
                if (err.extensions.code === "UNAUTHENTICATED") {
                    return fromPromise(
                        // 2. refreshToken으로 accessToken 재발급 받기
                        getAccessToken().then((newAccessToken) => {
                            setAccessToken(newAccessToken ?? "");
                            // 3. 재발급 받은 accessToken으로 방금 실패한 쿼리 재용청하기
                            operation.setContext({
                                headers: {
                                    ...operation.getContext().headers, // Authorization : Bearer 만료된 토큰
                                    Authorization: `Bearer ${newAccessToken}`, // 3-2. 새로운 토큰으로 바꿔치기
                                },
                            });
                        })
                    ).flatMap(() => forward(operation)); // 3-3. 방금 수정한 쿼리 재요청하기
                }
            }
        }
    });

    const uploadLink = createUploadLink({
        uri: "https://backend-practice.codebootcamp.co.kr/graphql",
        headers: { Authorization: `Bearer ${accessToken}` },
        credentials: "include",
    });

    const client = new ApolloClient({
        link: ApolloLink.from([errorLink, uploadLink]),
        cache: GLOBAL_STATE,
    });

    // prettier-ignore
    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
  )
}
