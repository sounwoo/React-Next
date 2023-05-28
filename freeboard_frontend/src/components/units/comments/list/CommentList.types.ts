import { IQuery } from '../../../../commons/types/generated/types';

export interface CommentListUIProps {
    data?: Pick<IQuery, 'fetchBoardComments'>;
}
