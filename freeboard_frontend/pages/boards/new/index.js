import { useMutation, gql } from '@apollo/client';
import {
    Wrapper,
    Title,
    WriterWrapper,
    Label,
    InputWrapper,
    Password,
    Writer,
    Subject,
    Content,
    FindMail,
    Post,
    SearchButton,
    Adress,
    Youtube,
    ImageWrapper,
    UploadButton,
    ButtonWrapper,
    OptionWrapper,
    RadioButton,
    RadioLabel,
    SubmitButton,
    Error,
} from '../../../styles/boards.emotion';
import { useState } from 'react';
import { useRouter } from 'next/router';

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
        }
    }
`;

export default function BoardsCreatePage() {
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

    function onChangewriter(event) {
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

    async function onClickCreate() {
        !writer ? setwriterError('이름을 입력해 주세요') : setwriterError('');
        !password ? setPasswordError('비밀번호를 입력해 주세요') : setPasswordError('');
        !title ? setTitleError('제목을 입력해 주세요') : setTitleError('');
        !contents ? setContentsError('내용을 입력해 주세요') : setContentsError('');
        // !youtube ? setYoutubeError('Youtube링크를 입력해 주세요') : setYoutubeError('');
        // !adress ? setAdressError('주소를 입력해 주세요') : setAdressError('');

        if (writer && password && subject && content) {
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
        <Wrapper>
            <Title>게시물 등록</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer
                        type="text"
                        placeholder="이름을 적어주세요."
                        onChange={onChangewriter}
                    />
                    <Error>{writerError}</Error>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password
                        type="password"
                        placeholder="비밀번호를 작성해주세요."
                        onChange={onChangePassword}
                    />
                    <Error>{passwordError}</Error>
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <Subject
                    type="text"
                    placeholder="제목을 작성해 주세요"
                    onChange={onChangeTitle}
                />
                <Error>{titleError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Content placeholder="내용을 입력해 주세요" onChange={onChangeContents} />
                <Error>{contentsError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <FindMail>
                    <Post placeholder="07250" />
                    <SearchButton>우편번호 검색</SearchButton>
                    <Adress onChange={onChangeAddress} />
                    <Error>{adressError}</Error>
                    <Adress />
                </FindMail>
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube
                    type="text"
                    placeholder="링크를 복사해주세요"
                    onChange={onChangeYoutube}
                />
                <Error>{youtubeError}</Error>
            </InputWrapper>
            <ImageWrapper>
                <Label>사진 첨부</Label>
                <UploadButton>+ Upload</UploadButton>
                <UploadButton>+ Upload</UploadButton>
                <UploadButton>+ Upload</UploadButton>
            </ImageWrapper>
            <OptionWrapper>
                <Label>메인설정</Label>
                <RadioButton type="radio" id="youtube" writer="radio-button" />
                <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                <RadioButton type="radio" id="image" writer="radio-button" />
                <RadioLabel htmlFor="image">사진</RadioLabel>
            </OptionWrapper>
            <ButtonWrapper>
                <SubmitButton onClick={onClickCreate}>등록하기</SubmitButton>
            </ButtonWrapper>
        </Wrapper>
    );
}
