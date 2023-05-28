import { ChangeEvent, useState } from 'react';
import CommentWriteUI from './CommentWrite.presenter';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD_COMMENT } from './CommentWrite.queries';
import {
    IMutation,
    IMutationCreateBoardCommentArgs,
} from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';
import { FETCH_BOARD_COMMENTS } from '../list/CommentList.queries';

export default function CommentWrite() {
    const router = useRouter();

    const [writer, setWriter] = useState('');
    const [password, setPassword] = useState('');
    const [contents, setContents] = useState('');

    const [createBoardComment] = useMutation<
        Pick<IMutation, 'createBoardComment'>,
        IMutationCreateBoardCommentArgs
    >(CREATE_BOARD_COMMENT);

    const onChangeWriter = (evnet: ChangeEvent<HTMLInputElement>) => {
        setWriter(evnet.target.value);
    };

    const onChangePassword = (evnet: ChangeEvent<HTMLInputElement>) => {
        setPassword(evnet.target.value);
    };

    const onChangeContents = (evnet: ChangeEvent<HTMLTextAreaElement>) => {
        setContents(evnet.target.value);
    };

    const onClickSubmit = async () => {
        if (!writer) return alert('작성자를 입력해주세요.');
        if (!password) return alert('비밀번호를 입력해주세요.');
        if (!contents) return alert('내용을 입력해 주세요.');
        try {
            if (!router || typeof router.query.boardId !== 'string') return <></>;
            await createBoardComment({
                variables: {
                    boardId: router.query.boardId,
                    createBoardCommentInput: {
                        writer,
                        password,
                        contents,
                        rating: 2,
                    },
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
            router.push(`/boards/${router.query.boardId}`);
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    return (
        <CommentWriteUI
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            contents={contents}
        />
    );
}
