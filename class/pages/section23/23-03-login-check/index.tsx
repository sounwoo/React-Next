import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
    IMutation,
    IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";
import { useRouter } from "next/router";

const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            accessToken
        }
    }
`;

export default function LoginPage(): JSX.Element {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginUser] = useMutation<
        Pick<IMutation, "loginUser">,
        IMutationLoginUserArgs
    >(LOGIN_USER);

    const [, setAccessToken] = useRecoilState(accessTokenState);

    const onChangeEamil = (event: ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.currentTarget.value);
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.currentTarget.value);
    };

    const onClickLogin = async (): Promise<void> => {
        try {
            // 1. 로그인 뮤테이션 날려서 accessToken받아오기
            const result = await loginUser({
                variables: { email, password },
            });

            const accessToken = result.data?.loginUser.accessToken;

            // 2. 받아온 accessToken을 globalState에 저장하기
            if (!accessToken) return alert("로그인 실패!, 다시 시도해 주세요!");
            setAccessToken(accessToken);
            localStorage.setItem("accessToken", accessToken); // 임시 사용

            // 3. 로그인 성공 페이지로 이동
            void router.push("23-03-login-check-success");
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    return (
        <>
            이메일 : <input type="text" onChange={onChangeEamil} />
            비밀번호 : <input type="password" onChange={onChangePassword} />
            <button onClick={onClickLogin}>로그인하기!</button>
        </>
    );
}
