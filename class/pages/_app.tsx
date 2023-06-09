import type { AppProps } from "next/app";
import Layout from "../src/components/common/layout";
import ApolloSetting from "../src/components/common/apollo";
import { Global } from "@emotion/react";
import { golbalStyles } from "../src/commons/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <div>====== 여기는 _app.js 컴포넌트 시작부분</div>
            <ApolloSetting>
                <>
                    <Global styles={golbalStyles} />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </>
            </ApolloSetting>

            <div>====== 여기는 _app.js 컴포넌트 마지막부분</div>
        </>
    );
}
