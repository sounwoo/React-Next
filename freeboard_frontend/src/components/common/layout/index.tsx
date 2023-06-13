import { ILayoutProps } from "./Layout.tpyes";
import Banner from "./banner/Banner.container";
import Header from "./header/Header.container";
import Navigatrion from "./navigation/Navigatrion.container";

export default function Layout(props: ILayoutProps): JSX.Element {
    return (
        <>
            <Header />
            <Banner />
            <Navigatrion />
            <div>{props.children}</div>
        </>
    );
}
