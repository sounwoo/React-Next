import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

export const loginCheck = (Componente: any) => (props: any) => {
    const router = useRouter();
    const qqq = useRecoilValueLoadable(restoreAccessTokenLoadable);

    // 1. 로그인 체크(refreshToken 이전)
    // useEffect(() => {
    //     if (!localStorage.getItem("accessToken")) {
    //         alert("로그인후 이용가능합니다.");
    //         void router.push("23-05-login-check-hoc");
    //     }
    // }, []);

    // 2. 로그인 체크(refreshToken 이후 => 안좋음) _app.tsx에 이어서 총 2번 요청
    // useEffect(() => {
    //     void getAccessToken().then((newAccessToken) => {
    //         if (!newAccessToken) {
    //             alert("로그인후 이용가능합니다.");
    //             void router.push("23-05-login-check-hoc");
    //         }
    //     });
    // }, []);

    // 3. 로그인 체크(refreshToken 이후 => 좋음) 함수를 공유함으로 _app.tsx에 이어서 총 1번만 요청
    useEffect(() => {
        void qqq.toPromise().then((newAccessToken) => {
            if (!newAccessToken) {
                alert("로그인후 이용가능합니다.");
                void router.push("23-05-login-check-hoc");
            }
        });
    }, []);

    return <Componente {...props} />;
};
