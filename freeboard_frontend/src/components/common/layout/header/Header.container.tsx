import { useRouter } from "next/router";
import HeaderUI from "./Header.presenter";

export default function Header(): JSX.Element {
    const router = useRouter();

    const onClickLogo = () => {
        router.push("/boards");
    };

    return <HeaderUI onClickLogo={onClickLogo} />;
}
