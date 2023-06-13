import type { AppProps } from "next/app";
import ApolloSetting from "../src/components/common/apollo";
import Layout from "../src/components/common/layout";
import { Global } from "@emotion/react";
import { golbalStyles } from "../src/commons/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <ApolloSetting>
                <>
                    <Global styles={golbalStyles} />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </>
            </ApolloSetting>
        </>
    );
}
