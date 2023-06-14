import * as S from "./Pagination.style";
import { IPaginationUIProps } from "./Pagination.types";

export default function PaginationUI(props: IPaginationUIProps): JSX.Element {
    return (
        <S.Warrper>
            <S.ArrowSpan onClick={props.onClickPrevPage}>{"<"}</S.ArrowSpan>
            {new Array(10)
                .fill(0)
                .filter((_, index) => {
                    const temp = index + props.startPage;

                    return temp <= props.lastPage;
                })
                .map((_, index) => {
                    const temp = index + props.startPage;
                    return (
                        <S.pageNumber
                            key={temp}
                            id={String(temp)}
                            onClick={props.onClickPage}
                        >
                            {temp}
                        </S.pageNumber>
                    );
                })}
            <S.ArrowSpan onClick={props.onClickNextPage}>{">"}</S.ArrowSpan>
        </S.Warrper>
    );
}
