import { useRouter } from "next/router";
import NavigatrionUI from "./Navigation.presenter";
import { MouseEvent, useState } from "react";

export default function Navigation(): JSX.Element {
    const [activePage, setActivePage] = useState("");
    const router = useRouter();

    const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
        const activePage = event.currentTarget.id;
        setActivePage(activePage);
        void router.push(activePage);
    };

    return <NavigatrionUI onClickMenu={onClickMenu} activePage={activePage} />;
}
