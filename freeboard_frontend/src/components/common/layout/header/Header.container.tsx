import { useRouter } from "next/router";
import HeaderUI from "./Header.presenter";

export default function Header(): JSX.Element {
    const router = useRouter();

    const onClickLogo = () => {
        router.push("/boards");
    };

    const onClickLogin = () => {
        router.push("/login");
    };

    return <HeaderUI onClickLogo={onClickLogo} onClickLogin={onClickLogin} />;
}
