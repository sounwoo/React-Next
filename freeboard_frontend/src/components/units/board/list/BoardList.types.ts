import { ChangeEvent, MouseEvent } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';

export interface IBoardListUIProps {
    onClickMoveToBoardsNew: () => void;
    onClickMoveToBoardsDetail: (event: MouseEvent<HTMLDivElement>) => void;
    data?: Pick<IQuery, 'fetchBoards'>;
}
