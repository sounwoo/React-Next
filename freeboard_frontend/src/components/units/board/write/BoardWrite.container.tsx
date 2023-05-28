import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import { useMutation } from '@apollo/client';
import { IBoardWriteProps } from './BoardWrite.types';
import {
    IMutation,
    IMutationCreateBoardArgs,
    IMutationUpdateBoardArgs,
    IUpdateBoardInput,
} from '../../../../commons/types/generated/types';

export default function BoardWrite(props: IBoardWriteProps) {
    const router = useRouter();

    const [isActive, setIsActive] = useState<boolean>(false);
    const [writer, setwriter] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [contents, setContents] = useState<string>('');
    const [youtube, setYoutube] = useState<string>('');
    const [adress, setAdress] = useState<string>('');

    const [writerError, setwriterError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [titleError, setTitleError] = useState<string>('');
    const [contentsError, setContentsError] = useState<string>('');
    const [youtubeError, setYoutubeError] = useState<string>('');
    const [adressError, setAdressError] = useState<string>('');

    const [createBoard] = useMutation<
        Pick<IMutation, 'createBoard'>,
        IMutationCreateBoardArgs
    >(CREATE_BOARD);
    const [updateBoard] = useMutation<
        Pick<IMutation, 'updateBoard'>,
        IMutationUpdateBoardArgs
    >(UPDATE_BOARD);

    function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setwriter(value);
        if (value && password && title && contents) setIsActive(true);
    }

    function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setPassword(value);
        if (writer && value && title && contents) setIsActive(true);
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setTitle(value);
        if (writer && password && value && contents) setIsActive(true);
    }

    function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
        const { value } = event.target;
        setContents(value);
        if (writer && password && title && value) setIsActive(true);
    }

    function onChangeYoutube(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setYoutube(value);
    }

    function onChangeAddress(event: ChangeEvent<HTMLInputElement>) {
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

    const onClickUpdate = async () => {
        const updateBoardInput: IUpdateBoardInput = {};
        if (title) updateBoardInput.title = title;
        if (contents) updateBoardInput.contents = contents;

        try {
            const result = await updateBoard({
                variables: {
                    boardId: String(router.query.boardId),
                    password,
                    updateBoardInput,
                },
            });

            router.push(`/boards/${result.data.updateBoard._id}`);
        } catch (error) {
            alert(error.message);
        }
    };

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
            isActive={isActive}
            isEdit={props.isEdit}
            onClickUpdate={onClickUpdate}
            data={props.data}
        />
    );
}
