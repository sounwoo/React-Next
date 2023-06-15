import { Fragment } from "react";
import { Menu, Warpper } from "./Navigation.styles";
import { INavigationUIProps } from "./Navigation.types";

const NAVIGATION_MENUS = [
    { name: "자유게시판", page: "/boards" },
    { name: "중고마켓", page: "/markets" },
    { name: "마이페이지", page: "/mypages" },
];

export default function NavigationUI(props: INavigationUIProps): JSX.Element {
    return (
        <Warpper>
            {NAVIGATION_MENUS.map((el, i) => (
                <Fragment key={el.page}>
                    <Menu
                        id={el.page}
                        onClick={props.onClickMenu}
                        style={
                            i === NAVIGATION_MENUS.length - 1
                                ? { border: "none" }
                                : {}
                        }
                        isActive={props.activePage === el.page}
                    >
                        {el.name}
                    </Menu>
                </Fragment>
            ))}
        </Warpper>
    );
}
