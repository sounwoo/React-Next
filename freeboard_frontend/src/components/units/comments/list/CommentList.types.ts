import { MouseEvent } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';

export interface CommentListUIProps {
    onClickCommentDelete: (event: MouseEvent<HTMLImageElement>) => void;
    data?: Pick<IQuery, 'fetchBoardComments'>;
}
