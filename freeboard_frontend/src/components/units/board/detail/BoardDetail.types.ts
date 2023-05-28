import { MouseEvent } from 'react';
import { IQuery } from '../../../../commons/types/generated/types';

export interface IBoardDetailUIProps {
    onClickMove: (event: MouseEvent<HTMLButtonElement>) => void;
    data?: Pick<IQuery, 'fetchBoard'>;
}
