import { useState } from "react";

export default function GraphqlMutationPage() {
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const onClickSubmit = async () => {};

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
