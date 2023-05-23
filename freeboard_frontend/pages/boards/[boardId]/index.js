import { gql, useQuery } from '@apollo/client';
import {
    Wrapper,
    Header,
    Avatar,
    Writer,
    Info,
    CreateAt,
    CardWrapper,
    Body,
    Title,
    Content,
    BottomWrapper,
    Button,
} from '../../../styles/boardsDetail';
import { useRouter } from 'next/router';

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            writer
            title
            contents
            createdAt
        }
    }
`;

export default function BoardDetailPage() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

    return (
        <Wrapper>
            <CardWrapper>
                <Header>
                    <Avatar src="/images/avatar.png" />
                    <Info>
                        <Writer>{data?.fetchBoard?.writer}</Writer>
                        <CreateAt>Date : {data?.fetchBoard?.createdAt}</CreateAt>
                    </Info>
                </Header>
                <Body>
                    <Title> {data?.fetchBoard?.title} </Title>
                    <Content>{data?.fetchBoard?.contents}</Content>
                </Body>
            </CardWrapper>
            <BottomWrapper>
                <Button>목록으로</Button>
                <Button>수정하기</Button>
                <Button>삭제하기</Button>
            </BottomWrapper>
        </Wrapper>
    );
}
