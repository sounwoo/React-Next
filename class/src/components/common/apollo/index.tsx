import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

interface IApolloSettingProps {
    children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
    const client = new ApolloClient({
        uri: "http://backend-example.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(),
    });

    // prettier-ignore
    return (
        <ApolloProvider client={client}>
            {props.children}
        </ApolloProvider>
  )
}
