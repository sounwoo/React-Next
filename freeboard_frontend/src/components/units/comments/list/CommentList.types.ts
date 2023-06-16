import {
    IBoardComment,
    IQuery,
} from "../../../../commons/types/generated/types";

export interface CommentListUIProps {
    onLoadMore: () => void;
    data?: Pick<IQuery, "fetchBoardComments">;
}

export interface ICommentListItemProps {
    el: IBoardComment;
}
