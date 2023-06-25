import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    ApolloLink,
} from "@apollo/client";
import { IApolloSettingProps } from "./apolloSetting.types";
import { createUploadLink } from "apollo-upload-client";

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
    const fileLink = createUploadLink({
        uri: "http://backendonline.codebootcamp.co.kr/graphql",
    });

    const client = new ApolloClient({
        link: ApolloLink.from([fileLink]),
        cache: new InMemoryCache(),
    });
    return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
