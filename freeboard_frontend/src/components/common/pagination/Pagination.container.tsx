import { MouseEvent, useState } from "react";
import PaginationUI from "./Pagination.presenter";
import { IPaginationProps } from "./Pagination.types";

export default function Pagination(props: IPaginationProps): JSX.Element {
    const [startPage, setStartPage] = useState(1);
    const [activedPage, setActivedPage] = useState(1);
    const lastPage = Math.ceil(props.count / 10);

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        const activedPage = +event.currentTarget.id;
        setActivedPage(activedPage);
        void props.refetch({ page: activedPage });
    };

    const onClickPrevPage = () => {
        if (startPage === 1) return;
        const prevPage = startPage - 10;
        setStartPage(prevPage);
        setActivedPage(prevPage);
        void props.refetch({ page: prevPage });
    };

    const onClickNextPage = () => {
        if (!(startPage + 10 <= lastPage)) return;
        const nextPage = startPage + 10;
        setStartPage(nextPage);
        setActivedPage(nextPage);
        void props.refetch({ page: nextPage });
    };

    return (
        <PaginationUI
            lastPage={lastPage}
            startPage={startPage}
            activedPage={activedPage}
            onClickPage={onClickPage}
            onClickPrevPage={onClickPrevPage}
            onClickNextPage={onClickNextPage}
        />
    );
}
