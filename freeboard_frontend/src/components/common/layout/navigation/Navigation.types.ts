import { MouseEvent } from "react";

export interface INavigationUIProps {
    onClickMenu: (event: MouseEvent<HTMLDivElement>) => void;
    activePage: string;
}
