import CommentListItem from "./CommentList.presenterItem";
import { CommentListUIProps } from "./CommentList.types";
import InfiniteScroll from "react-infinite-scroller";

export default function CommentListUI(props: CommentListUIProps) {
    return (
        <div>
            <div style={{ height: "500px", overflow: "auto" }}>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={props.onLoadMore}
                    hasMore={true}
                >
                    {props.data?.fetchBoardComments.map((el) => (
                        <CommentListItem key={el._id} el={el} />
                    )) ?? <></>}
                </InfiniteScroll>
            </div>
        </div>
    );
}
