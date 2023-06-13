import { useRouter } from "next/router";
import NavigatrionUI from "./Navigation.presenter";
import { MouseEvent } from "react";

export default function Navigation(): JSX.Element {
    const router = useRouter();

    const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
        void router.push(event.currentTarget.id);
    };

    return <NavigatrionUI onClickMenu={onClickMenu} />;
}
