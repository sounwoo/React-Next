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
} from '../../../styles/boards.emotion';

export default function BoardsCreatePage() {
    return (
        <Wrapper>
            <Title>게시물 등록</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer type="text" placeholder="이름을 적어주세요." />
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password type="password" placeholder="비밀번호를 작성해주세요." />
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <Subject type="text" placeholder="제목을 작성해 주세요" />
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Content placeholder="내용을 입력해 주세요" />
            </InputWrapper>
        </Wrapper>
    );
}
