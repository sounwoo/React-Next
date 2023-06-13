import {
    LoginButton,
    LoginRegister,
    LogoImg,
    RegisterButton,
    Warpper,
} from "./Header.styles";
import { IHeaderUIProps } from "./Header.types";

export default function HeaderUI(props: IHeaderUIProps): JSX.Element {
    return (
        <Warpper>
            <LogoImg src="/images/logo.png" onClick={props.onClickLogo} />
            <LoginRegister>
                <LoginButton onClick={props.onClickLogin}>로그인</LoginButton>
                <RegisterButton>화원가입</RegisterButton>
            </LoginRegister>
        </Warpper>
    );
}
