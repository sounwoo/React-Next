import { useMutation, gql } from "@apollo/client";
import {
    IMutation,
    IMutationCreateBoardArgs,
} from "../../../src/commons/types/generated/types";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const CREATE_BOARD = gql`
    mutation {
        createBoard(writer: "철수", title: "제목", contents: "내용") {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage(): JSX.Element {
    const [createBoard] = useMutation<
        Pick<IMutation, "createBoard">,
        IMutationCreateBoardArgs
    >(CREATE_BOARD);

    const onClickSubmit = async (): Promise<void> => {
        const result = await createBoard();
        console.log(result);
    };

    return (
        <button onClick={wrapAsync(onClickSubmit)}>
            GRAPHQL-API(동기) 요청하기
        </button>
    );
}
