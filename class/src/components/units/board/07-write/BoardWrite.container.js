import { useMutation } from '@apollo/client';
import { useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD } from './BoardWrite.queries';

export default function BoardWrite() {
    const [isActive, setIsActive] = useState(false);
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
        if (event.target.value && title && contents) setIsActive(true);
    };

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
        if (writer && event.target.value && contents) setIsActive(true);
    };

    const onChangeContents = (event) => {
        setContents(event.target.value);
        if (writer && title && event.target.value) setIsActive(true);
    };

    return (
        <>
            <div>$$$$$ 여기는 컨테이너</div>
            <BoardWriteUI
                onClickSubmit={onClickSubmit}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                isActive={isActive}
            />
            <div>$$$$$ 여기는 컨테이너</div>
        </>
    );
}
