import * as S from "./CommentWrite.styles";
import { CommentWrtieUIProps } from "./CommentWrite.types";
import { Rate } from "antd";

export default function CommentWriteUI(props: CommentWrtieUIProps) {
    return (
        <S.Wrapper>
            <S.WrapperHeader>
                <S.Vector src="/images/comments/vector.png" />
                <span>댓글</span>
                <span id="rate">
                    <Rate
                        onChange={props.onChangeRating}
                        value={props.rating}
                    />
                </span>
            </S.WrapperHeader>
            <S.WriterWrapper>
                <S.Input
                    type="text"
                    placeholder="작성자"
                    onChange={props.onChangeWriter}
                />
                <S.Input
                    type="password"
                    placeholder="비밀번호"
                    onChange={props.onChangePassword}
                />
            </S.WriterWrapper>
            <S.ContentsWrapper>
                <S.Contents
                    maxLength={100}
                    placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                    onChange={props.onChangeContents}
                ></S.Contents>
                <S.BottomWrapper>
                    <S.ContentsLength>
                        {props.contents.length}/100
                    </S.ContentsLength>
                    <S.Button onClick={props.onClickSubmit}>등록하기</S.Button>
                </S.BottomWrapper>
            </S.ContentsWrapper>
        </S.Wrapper>
    );
}
