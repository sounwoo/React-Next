import { MouseEvent, useState } from "react";
import PaginationUI from "./Pagination.presenter";
import { IPaginationProps } from "./Pagination.types";

export default function Pagination(props: IPaginationProps): JSX.Element {
    const [startPage, setStartPage] = useState(1);

    const onClickPage = (event: MouseEvent<HTMLSpanElement>): void => {
        void props.refetch({ page: +event.currentTarget.id });
    };

    const onClickPrevPage = () => {
        if (startPage === 1) return;
        const prevPage = startPage - 10;
        setStartPage(prevPage);
        void props.refetch({ page: prevPage });
    };

    const onClickNextPage = () => {
        if (!(startPage + 10 <= props.lastPage)) return;
        const nextPage = startPage + 10;
        setStartPage(nextPage);
        void props.refetch({ page: nextPage });
    };

    return (
        <PaginationUI
            refetch={props.refetch}
            lastPage={props.lastPage}
            onClickPage={onClickPage}
            startPage={startPage}
            onClickPrevPage={onClickPrevPage}
            onClickNextPage={onClickNextPage}
        />
    );
}
