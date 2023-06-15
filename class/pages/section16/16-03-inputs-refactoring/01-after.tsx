import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

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

export default function GraphqlMutationPage(): JSX.Element {
    const [inputs, setInputs] = useState({
        writer: "",
        title: "",
        contents: "",
    });
    const [createBoard] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result = await createBoard({
            // $ 역할을 해줌
            variables: { ...inputs },
        });

        alert(result.data.createBoard.message);
    };

    const onChangeInputs = (event) => {
        setInputs((prev) => ({
            ...inputs,
            [event.target.id]: event.target.value,
        }));
    };

    return (
        <>
            작성자:
            <input type="text" id="writer" onChange={onChangeInputs} />
            <br />
            제목:
            <input type="text" id="title" onChange={onChangeInputs} />
            <br />
            내용:
            <input type="text" id="contents" onChange={onChangeInputs} />
            <br />
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    );
}
