import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
    onClickMove: (event: MouseEvent<HTMLButtonElement>) => void;
    onClickLike: () => void;
    onClickDislike: () => void;
    data?: Pick<IQuery, "fetchBoard">;
}
