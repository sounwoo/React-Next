import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

export default function App({ Component, pageProps }) {
    const client = new ApolloClient({
        uri: 'http://backend-example.codebootcamp.co.kr/graphql',
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}
