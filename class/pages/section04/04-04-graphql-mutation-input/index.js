import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

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
    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [createBoard] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await createBoard({
            // $ 역할을 해줌
            variables: {
                writer,
                title,
                contents,
            },
        });
        console.log(result);
        alert(result.data.createBoard.message);
    };

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    };

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const onChangeContents = (event) => {
        setContents(event.target.value);
    };

    return (
        <>
            작성자:
            <input type="text" onChange={onChangeWriter} />
            <br />
            제목:
            <input type="text" onChange={onChangeTitle} />
            <br />
            내용:
            <input type="text" onChange={onChangeContents} />
            <br />
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    );
}
