import { MouseEvent } from 'react';

export interface IBoardDetailUIProps {
    onClickMove: (event: MouseEvent<HTMLButtonElement>) => void;
    data?: any;
}
