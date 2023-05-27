import { useRouter } from 'next/router';
import { useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD } from './BoardWrite.queries';
import { useMutation } from '@apollo/client';

export default function BoardWrite() {
    const router = useRouter();

    const [writer, setwriter] = useState('');
    const [password, setPassword] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [youtube, setYoutube] = useState('');
    const [adress, setAdress] = useState('');

    const [writerError, setwriterError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [titleError, setTitleError] = useState('');
    const [contentsError, setContentsError] = useState('');
    const [youtubeError, setYoutubeError] = useState('');
    const [adressError, setAdressError] = useState('');

    const [createBoard] = useMutation(CREATE_BOARD);

    function onChangeWriter(event) {
        const { value } = event.target;
        setwriter(value);
    }

    function onChangePassword(event) {
        const { value } = event.target;
        setPassword(value);
    }

    function onChangeTitle(event) {
        const { value } = event.target;
        setTitle(value);
    }

    function onChangeContents(event) {
        const { value } = event.target;
        setContents(value);
    }

    function onChangeYoutube(event) {
        const { value } = event.target;
        setYoutube(value);
    }

    function onChangeAddress(event) {
        const { value } = event.target;
        setAdress(value);
    }

    async function onClickSubmit() {
        !writer ? setwriterError('이름을 입력해 주세요') : setwriterError('');
        !password ? setPasswordError('비밀번호를 입력해 주세요') : setPasswordError('');
        !title ? setTitleError('제목을 입력해 주세요') : setTitleError('');
        !contents ? setContentsError('내용을 입력해 주세요') : setContentsError('');
        // !youtube ? setYoutubeError('Youtube링크를 입력해 주세요') : setYoutubeError('');
        // !adress ? setAdressError('주소를 입력해 주세요') : setAdressError('');

        if (writer && password && title && contents) {
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            title,
                            contents,
                            password,
                            writer,
                        },
                    },
                });
                router.push(`/boards/${result.data.createBoard._id}`);
            } catch (error) {
                alert(error.message);
            }
        }
    }

    return (
        <BoardWriteUI
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            youtubeError={youtubeError}
            adressError={adressError}
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            onChangeYoutube={onChangeYoutube}
            onChangeAddress={onChangeAddress}
        />
    );
}
