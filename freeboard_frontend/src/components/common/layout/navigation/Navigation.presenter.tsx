import { Menu, MyInfo, Warpper } from "./Navigation.styles";

export default function NavigatrionUI() {
    return (
        <Warpper>
            <Menu>자유게시판</Menu>
            <Menu>중고마켓</Menu>
            <MyInfo>마이페이지</MyInfo>
        </Warpper>
    );
}
