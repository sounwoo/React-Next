import { useMutation } from '@apollo/client';
import { useState, ChangeEvent } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { useRouter } from 'next/router';
import { IBoardWriteProps, IMyvariables } from './BoardWrite.types';

export default function BoardWrite(props: IBoardWriteProps) {
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

        router.push(
            `/section10/10-02-typescript-boards/${result.data.createBoard.number}`
        );
    };

    const onClickUpdate = async () => {
        const myvariables: IMyvariables = { number: Number(router.query.number) };
        if (writer) myvariables.writer = writer;
        if (title) myvariables.title = title;
        if (contents) myvariables.contents = contents;

        const result = await updateBoard({ variables: myvariables });

        console.log(result);
        router.push(
            `/section10/10-02-typescript-boards/${result.data.updateBoard.number}`
        );
    };
    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
    };

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
                data={props.data}
            />
            <div>$$$$$ 여기는 컨테이너</div>
        </>
    );
}
