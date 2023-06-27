import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/stores";
import { useEffect } from "react";

const GLOBAL_STATE = new InMemoryCache();

interface IApolloSettingProps {
    children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

    // 1. 프리렌더링 예제 - propess.brower 방법
    // if (process.browser) {
    //     console.log("나는 브라우저다");
    // } else console.log("yarn dev로 실행시킨 프로그램 내부다!");

    // 2. 프리렌더링 예제 - typeof window 방법
    // if (typeof window !== undefined) console.log("나는 브라우저다");
    // else console.log("yarn dev로 실행시킨 프로그램 내부다!");

    // 3. 프리렌더링 무시 - useEffect 방법
    useEffect(() => {
        const result = localStorage.getItem("accessToken");
        setAccessToken(result ?? "");
    }, []);

    const uploadLink = createUploadLink({
        uri: "http://backend-practice.codebootcamp.co.kr/graphql",
        headers: { Authorization: `Bearer ${accessToken}` },
    });

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: GLOBAL_STATE,
    });

    // prettier-ignore
    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
  )
}
