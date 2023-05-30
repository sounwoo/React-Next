import { UpCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const MyIcon = styled(UpCircleOutlined)`
    color: red;
    font-size: 50px;
    cursor: pointer;
`;

export default function LibraryIconPage(): JSX.Element {
    const onClickDelete = (event: MouseEvent<HTMLDivElement>): void => {
        console.log(event.currentTarget.id);
    };

    return (
        <div id="삭제할 게시글 id" onClick={onClickDelete}>
            <MyIcon rev={undefined} />
        </div>
    );
}
