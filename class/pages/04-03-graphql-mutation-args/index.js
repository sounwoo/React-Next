import { useMutation, gql } from '@apollo/client';

const CREATE_BOARD = gql`
    # 타입정의
    mutation createBoard($writer: String, $title: String, $contents: String) {
        # 실제 우리가 전달할 변수 적는 곳
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [createBoard] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await createBoard({
            // $ 역할을 해줌
            variables: {
                writer: '철수',
                title: '안녕',
                contents: '반갑',
            },
        });
        console.log(result);
        alert(result.data.createBoard.message);
    };

    return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
