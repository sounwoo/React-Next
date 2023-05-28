import { getDate } from '../../util/utiles';
import * as s from './BoardDetail.styles';

export default function BoardDetailUI(props) {
    return (
        <s.Wrapper>
            <s.CardWrapper>
                <s.Header>
                    <s.Avatar src="/images/avatar.png" />
                    <s.Info>
                        <s.Writer>{props.data?.fetchBoard?.writer}</s.Writer>
                        <s.CreateAt>
                            Date : {getDate(props.data?.fetchBoard?.createdAt)}
                        </s.CreateAt>
                    </s.Info>
                </s.Header>
                <s.Body>
                    <s.Title> {props.data?.fetchBoard?.title} </s.Title>
                    <s.Content>{props.data?.fetchBoard?.contents}</s.Content>
                </s.Body>
            </s.CardWrapper>
            <s.BottomWrapper>
                <s.Button>목록으로</s.Button>
                <s.Button onClick={props.onClickMove}>수정하기</s.Button>
                <s.Button>삭제하기</s.Button>
            </s.BottomWrapper>
        </s.Wrapper>
    );
}
