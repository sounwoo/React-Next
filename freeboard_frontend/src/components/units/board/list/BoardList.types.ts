import { ChangeEvent, MouseEvent } from 'react';

export interface IBoardListUIProps {
    onClickMoveToBoardsNew: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickMoveToBoardsDetail: (event: MouseEvent<HTMLDivElement>) => void;
    data?: any;
}
