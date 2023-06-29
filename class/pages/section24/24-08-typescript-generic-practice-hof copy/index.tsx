import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";

// prettier-ignore
export const loginCheck = (Componente: () => JSX.Element) => <P extends Record<string , unknown>>(props: P): ReactElement<P> => {
    const router = useRouter();
    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            alert("로그인후 이용가능합니다.");
            void router.push("23-05-login-check-hoc");
        }
    }, []);

    return <Componente {...props} />;
};
