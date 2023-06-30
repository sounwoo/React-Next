import { GraphQLClient, gql } from "graphql-request";
import { IMutation } from "../types/generated/types";

const RESTORE_ACCESS_TOKEN = gql`
    mutation {
        restoreAccessToken {
            accessToken
        }
    }
`;

export const getAccessToken = async (): Promise<string | undefined> => {
    try {
        const graphQLClient = new GraphQLClient(
            "https://backend-practice.codebootcamp.co.kr/graphql",
            { credentials: "include" }
        );
        const result = await graphQLClient.request<
            Pick<IMutation, "restoreAccessToken">
        >(RESTORE_ACCESS_TOKEN);
        return result.restoreAccessToken.accessToken;
    } catch (error) {
        if (error instanceof Error) console.log(error.message);
    }
};
