import { useMutation } from '@apollo/client';
import { useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { useRouter } from 'next/router';

export default function BoardWrite(props) {
    const router = useRouter();

    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    const onClickSubmit = async () => {
        const result = await createBoard({
            // $ 역할을 해줌
            variables: {
                writer,
                title,
                contents,
            },
        });

        router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
    };

    const onClickUpdate = async () => {
        const result = await updateBoard({
            variables: {
                number: +router.query.number,
                writer,
                title,
                contents,
            },
        });
        console.log(result);
        router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
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
            <div>$$$$$ 여기는 컨테이너</div>
            <BoardWriteUI
                onClickSubmit={onClickSubmit}
                onClickUpdate={onClickUpdate}
                onChangeWriter={onChangeWriter}
                onChangeTitle={onChangeTitle}
                onChangeContents={onChangeContents}
                isEdit={props.isEdit}
            />
            <div>$$$$$ 여기는 컨테이너</div>
        </>
    );
}
