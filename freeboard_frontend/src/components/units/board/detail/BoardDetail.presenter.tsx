import { getDate } from "../../util/utiles";
import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import ReactPlayer from "react-player";

export default function BoardDetailUI(props: IBoardDetailUIProps): JSX.Element {
    return (
        <S.Wrapper>
            <S.CardWrapper>
                <S.Header>
                    <S.AvatarWarpper>
                        <S.Avatar src="/images/avatar.png" />
                        <S.Info>
                            <S.Writer>
                                {props.data?.fetchBoard?.writer}
                            </S.Writer>
                            <S.CreateAt>
                                Date :{" "}
                                {getDate(props.data?.fetchBoard?.createdAt)}
                            </S.CreateAt>
                        </S.Info>
                    </S.AvatarWarpper>
                    <S.IconWarpper>
                        <S.LinkIcon src="/images/boards/detail/link.png" />
                        <Tooltip
                            color={"blue"}
                            title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
                        >
                            <S.LocationIcon src="/images/boards/detail/location.png" />
                        </Tooltip>
                    </S.IconWarpper>
                </S.Header>
                <S.Body>
                    <S.Title> {props.data?.fetchBoard?.title} </S.Title>
                    {props.data?.fetchBoard.images
                        ?.filter((el) => el)
                        .map((el) => (
                            <S.Image
                                key={el}
                                src={`https://storage.googleapis.com/${el}`}
                            />
                        ))}
                    <S.Content>{props.data?.fetchBoard?.contents}</S.Content>
                </S.Body>
                {props.data?.fetchBoard.youtubeUrl !== "" && (
                    <S.Youtube>
                        <ReactPlayer
                            url={props.data?.fetchBoard.youtubeUrl ?? ""}
                            controls
                            loop={true}
                            width="100%"
                            height="100%"
                        />
                    </S.Youtube>
                )}
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
                <S.Button onClick={props.onClickBoardListMove}>
                    목록으로
                </S.Button>
                <S.Button onClick={props.onClickMove}>수정하기</S.Button>
                <S.Button onClick={props.onClickDeleteBoard}>삭제하기</S.Button>
            </S.BottomWrapper>
        </S.Wrapper>
    );
}
