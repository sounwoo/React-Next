import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router';

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
    const router = useRouter();
    const [createBoard] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        try {
            const result = await createBoard({
                // $ 역할을 해줌
                variables: {
                    writer: '철수',
                    title: '안녕',
                    contents: '반갑',
                },
            });
            console.log(result);
            router.push(
                `/section05/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
            );
        } catch (err) {
            alert(err.message);
        }
    };

    return <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>;
}
