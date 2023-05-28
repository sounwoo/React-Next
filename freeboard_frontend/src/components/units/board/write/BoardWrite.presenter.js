import * as s from './BoardWrite.styles';

export default function BoardWriteUI(props) {
    return (
        <s.Wrapper>
            <s.Title>게시물 {props.isEdit ? '수정' : '등록'}</s.Title>
            <s.WriterWrapper>
                <s.InputWrapper>
                    <s.Label>작성자</s.Label>
                    <s.Writer
                        type="text"
                        placeholder="이름을 적어주세요."
                        onChange={props.onChangeWriter}
                        defaultValue={props.data?.fetchBoard.writer}
                    />
                    <s.Error>{props.writerError}</s.Error>
                </s.InputWrapper>
                <s.InputWrapper>
                    <s.Label>비밀번호</s.Label>
                    <s.Password
                        type="password"
                        placeholder="비밀번호를 작성해주세요."
                        onChange={props.onChangePassword}
                    />
                    <s.Error>{props.passwordError}</s.Error>
                </s.InputWrapper>
            </s.WriterWrapper>
            <s.InputWrapper>
                <s.Label>제목</s.Label>
                <s.Subject
                    type="text"
                    placeholder="제목을 작성해 주세요"
                    onChange={props.onChangeTitle}
                    defaultValue={props.data?.fetchBoard.title}
                />
                <s.Error>{props.titleError}</s.Error>
            </s.InputWrapper>
            <s.InputWrapper>
                <s.Label>내용</s.Label>
                <s.Content
                    placeholder="내용을 입력해 주세요"
                    onChange={props.onChangeContents}
                    defaultValue={props.data?.fetchBoard.contents}
                />
                <s.Error>{props.contentsError}</s.Error>
            </s.InputWrapper>
            <s.InputWrapper>
                <s.Label>주소</s.Label>
                <s.FindMail>
                    <s.Post placeholder="07250" />
                    <s.SearchButton>우편번호 검색</s.SearchButton>
                    <s.Adress onChange={props.onChangeAddress} />
                    <s.Error>{props.adressError}</s.Error>
                    <s.Adress />
                </s.FindMail>
            </s.InputWrapper>
            <s.InputWrapper>
                <s.Label>유튜브</s.Label>
                <s.Youtube
                    type="text"
                    placeholder="링크를 복사해주세요"
                    onChange={props.onChangeYoutube}
                />
                <s.Error>{props.youtubeError}</s.Error>
            </s.InputWrapper>
            <s.ImageWrapper>
                <s.Label>사진 첨부</s.Label>
                <s.UploadButton>+ Upload</s.UploadButton>
                <s.UploadButton>+ Upload</s.UploadButton>
                <s.UploadButton>+ Upload</s.UploadButton>
            </s.ImageWrapper>
            <s.OptionWrapper>
                <s.Label>메인설정</s.Label>
                <s.RadioButton type="radio" id="youtube" writer="radio-button" />
                <s.RadioLabel htmlFor="youtube">유튜브</s.RadioLabel>
                <s.RadioButton type="radio" id="image" writer="radio-button" />
                <s.RadioLabel htmlFor="image">사진</s.RadioLabel>
            </s.OptionWrapper>
            <s.ButtonWrapper>
                {props.isEdit ? (
                    <>
                        <s.SubmitButton> 취소하기</s.SubmitButton>
                        <s.UpdateButton onClick={props.onClickUpdate}>
                            수정하기
                        </s.UpdateButton>
                    </>
                ) : (
                    <s.SubmitButton
                        onClick={props.onClickSubmit}
                        isActive={props.isActive}
                    >
                        등록하기
                    </s.SubmitButton>
                )}
            </s.ButtonWrapper>
        </s.Wrapper>
    );
}
