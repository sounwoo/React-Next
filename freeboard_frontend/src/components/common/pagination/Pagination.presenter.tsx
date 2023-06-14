import * as S from "./Pagination.style";
import { IPaginationUIProps } from "./Pagination.types";

export default function PaginationUI(props: IPaginationUIProps): JSX.Element {
    return (
        <S.Warrper>
            <S.Page onClick={props.onClickPrevPage}>{"<"}</S.Page>
            {new Array(10)
                .fill(0)
                .filter((_, index) => index + props.startPage <= props.lastPage)
                .map((_, index) => {
                    const temp = index + props.startPage;
                    return (
                        <S.Page
                            key={temp}
                            id={String(temp)}
                            onClick={props.onClickPage}
                            isActive={temp === props.activedPage}
                        >
                            {temp}
                        </S.Page>
                    );
                })}
            <S.Page onClick={props.onClickNextPage}>{">"}</S.Page>
        </S.Warrper>
    );
}
