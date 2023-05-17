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

export default function BoardsCreatePage() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [youtube, setYoutube] = useState('');
    const [adress, setAdress] = useState('');

    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [contentError, setContentError] = useState('');
    const [youtubeError, setYoutubeError] = useState('');
    const [adressError, setAdressError] = useState('');

    function onChangeName(event) {
        const { value } = event.target;
        setName(value);
    }

    function onChangePassword(event) {
        const { value } = event.target;
        setPassword(value);
    }

    function onChangeSubject(event) {
        const { value } = event.target;
        setSubject(value);
    }

    function onChangeContent(event) {
        const { value } = event.target;
        setContent(value);
    }

    function onChangeYoutube(event) {
        const { value } = event.target;
        setYoutube(value);
    }

    function onChangeAddress(event) {
        const { value } = event.target;
        setAdress(value);
    }

    function onClickCreate() {
        !name ? setNameError('이름을 입력해 주세요') : setNameError('');
        !password ? setPasswordError('비밀번호를 입력해 주세요') : setPasswordError('');
        !subject ? setSubjectError('제목을 입력해 주세요') : setSubjectError('');
        !content ? setContentError('내용을 입력해 주세요') : setContentError('');
        !youtube ? setYoutubeError('Youtube링크를 입력해 주세요') : setYoutubeError('');
        !adress ? setAdressError('주소를 입력해 주세요') : setAdressError('');

        alert('게시물 작성 완료');
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
                        onChange={onChangeName}
                    />
                    <Error>{nameError}</Error>
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
                    onChange={onChangeSubject}
                />
                <Error>{subjectError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Content placeholder="내용을 입력해 주세요" onChange={onChangeContent} />
                <Error>{contentError}</Error>
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
                <RadioButton type="radio" id="youtube" name="radio-button" />
                <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                <RadioButton type="radio" id="image" name="radio-button" />
                <RadioLabel htmlFor="image">사진</RadioLabel>
            </OptionWrapper>
            <ButtonWrapper>
                <SubmitButton onClick={onClickCreate}>등록하기</SubmitButton>
            </ButtonWrapper>
        </Wrapper>
    );
}
