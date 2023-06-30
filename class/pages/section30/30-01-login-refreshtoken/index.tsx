import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
    IMutation,
    IMutationLoginUserExampleArgs,
} from "../../../src/commons/types/generated/types";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/stores";
import { useRouter } from "next/router";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const LOGIN_USER = gql`
    mutation loginUserExample($email: String!, $password: String!) {
        loginUserExample(email: $email, password: $password) {
            accessToken
        }
    }
`;

export default function LoginPage(): JSX.Element {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginUserExample] = useMutation<
        Pick<IMutation, "loginUserExample">,
        IMutationLoginUserExampleArgs
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
            const result = await loginUserExample({
                variables: { email, password },
            });

            const accessToken = result.data?.loginUserExample.accessToken;
            console.log(accessToken);

            // 2. 받아온 accessToken을 globalState에 저장하기
            if (!accessToken) return alert("로그인 실패!, 다시 시도해 주세요!");
            setAccessToken(accessToken);

            // 3. 로그인 성공 페이지로 이동
            void router.push("30-01-login-refreshtoken-success");
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    return (
        <>
            이메일 : <input type="text" onChange={onChangeEamil} />
            비밀번호 : <input type="password" onChange={onChangePassword} />
            <button onClick={wrapAsync(onClickLogin)}>로그인하기!</button>
        </>
    );
}
