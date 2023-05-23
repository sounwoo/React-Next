import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

export default function App({ Component, pageProps }) {
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
