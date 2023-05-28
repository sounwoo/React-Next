import * as S from './CommentWrite.styles';

export default function CommentWriteUI() {
    return (
        <S.Wrapper>
            <S.WrapperHeader>
                <S.Vector src="/images/comments/vector.png" />
                <S.Comment>댓글</S.Comment>
            </S.WrapperHeader>
            <S.WriterWrapper>
                <S.Writer type="text" placeholder="작성자" />
                <S.Password type="password" placeholder="비밀번호" />

                <S.Label for="rate1">⭐</S.Label>
                <S.Input type="radio" name="rating" value="1" id="rate1"></S.Input>
                <S.Label for="rate2">⭐</S.Label>
                <S.Input type="radio" name="rating" value="2" id="rate2"></S.Input>
                <S.Label for="rate3">⭐</S.Label>
                <S.Input type="radio" name="rating" value="3" id="rate3"></S.Input>
                <S.Label for="rate4">⭐</S.Label>
                <S.Input type="radio" name="rating" value="4" id="rate4"></S.Input>
                <S.Label for="rate5">⭐</S.Label>
                <S.Input type="radio" name="rating" value="5" id="rate5"></S.Input>
            </S.WriterWrapper>
            <S.Body placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></S.Body>
            <S.Butten>등록하기</S.Butten>
        </S.Wrapper>
    );
}
