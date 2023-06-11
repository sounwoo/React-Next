import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { IApolloSettingProps } from "./apolloSetting.types";

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
    const client = new ApolloClient({
        uri: "http://backendonline.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(),
    });
    return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
