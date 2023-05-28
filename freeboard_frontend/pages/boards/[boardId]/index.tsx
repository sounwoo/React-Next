import CommentWrite from '../../../src/components/units/comments/write/CommentWrite.container';
import BoardDetail from '../../../src/components/units/board/detail/BoardDetail.container';
import CommentList from '../../../src/components/units/comments/list/CommentList.container';

export default function GraphqlQureyPage() {
    return (
        <>
            <BoardDetail />
            <CommentWrite />
            <CommentList />
        </>
    );
}
