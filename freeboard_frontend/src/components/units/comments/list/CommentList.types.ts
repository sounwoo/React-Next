import { ChangeEvent, MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface CommentListUIProps {
    onClickCommentDelete: () => void;
    onToggleModal: (event: MouseEvent<HTMLImageElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onCancel: () => void;
    isOpen: boolean;
    data?: Pick<IQuery, "fetchBoardComments">;
}
