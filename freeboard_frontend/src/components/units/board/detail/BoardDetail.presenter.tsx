import { getDate } from "../../util/utiles";
import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
    return (
        <S.Wrapper>
            <S.CardWrapper>
                <S.Header>
                    <S.Avatar src="/images/avatar.png" />
                    <S.Info>
                        <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                        <S.CreateAt>
                            Date : {getDate(props.data?.fetchBoard?.createdAt)}
                        </S.CreateAt>
                    </S.Info>
                </S.Header>
                <S.Body>
                    <S.Title> {props.data?.fetchBoard?.title} </S.Title>
                    <S.Content>{props.data?.fetchBoard?.contents}</S.Content>
                </S.Body>
                <S.Youtube>
                    <ReactPlayer
                        url={String(props.data?.fetchBoard.youtubeUrl)}
                        controls
                        loop={true}
                        width="100%"
                        height="100%"
                    />
                </S.Youtube>
                <S.LikeWarpper>
                    <S.Like>
                        <LikeOutlined
                            onClick={props.onClickLike}
                            rev={undefined}
                        />
                        <span>{props.data?.fetchBoard.likeCount ?? 0}</span>
                    </S.Like>
                    <S.Like>
                        <DislikeOutlined
                            onClick={props.onClickDislike}
                            rev={undefined}
                        />
                        <span>{props.data?.fetchBoard.dislikeCount ?? 0}</span>
                    </S.Like>
                </S.LikeWarpper>
            </S.CardWrapper>
            <S.BottomWrapper>
                <S.Button>목록으로</S.Button>
                <S.Button onClick={props.onClickMove}>수정하기</S.Button>
                <S.Button>삭제하기</S.Button>
            </S.BottomWrapper>
        </S.Wrapper>
    );
}
