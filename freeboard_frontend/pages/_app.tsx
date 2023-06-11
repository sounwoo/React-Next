import type { AppProps } from "next/app";
import ApolloSetting from "../src/components/common/apollo";
import Layout from "../src/components/common/layout";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <ApolloSetting>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloSetting>
        </>
    );
}
