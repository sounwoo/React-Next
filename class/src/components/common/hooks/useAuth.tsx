import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuth = (): void => {
    const router = useRouter();
    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            alert("로그인후 이용가능합니다.");
            void router.push("23-05-login-check-hoc");
        }
    }, []);
};
