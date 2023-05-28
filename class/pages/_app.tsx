import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    const client = new ApolloClient({
        uri: 'http://backend-example.codebootcamp.co.kr/graphql',
        cache: new InMemoryCache(),
    });

    return (
        <>
            <div>====== 여기는 _app.js 컴포넌트 시작부분</div>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
            <div>====== 여기는 _app.js 컴포넌트 마지막부분</div>
        </>
    );
}
