import { ILayoutProps } from "./Layout.tpyes";
import Banner from "./banner/Banner.container";
import Header from "./header/Header.container";

export default function Layout(props: ILayoutProps): JSX.Element {
    return (
        <>
            <Header />
            <Banner />
            <div>네비게이션</div>
            <div>{props.children}</div>
        </>
    );
}
