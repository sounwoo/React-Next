import { memo } from "react";

interface IWordProps {
    el: string;
}

function Word(props: IWordProps): JSX.Element {
    console.log("자식이 리렌더링:", props.el);
    return <span>{props.el}</span>;
}
export default memo(Word);
