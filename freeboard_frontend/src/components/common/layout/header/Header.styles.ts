import styled from "@emotion/styled";

export const Warpper = styled.div`
    width: 1200px;
    height: 100px;
    margin-left: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LogoImg = styled.img`
    width: 150px;
    cursor: pointer;
`;

export const LoginRegister = styled.div`
    width: 140px;
    display: flex;
    direction: row;
    justify-content: space-between;
`;

export const LoginButton = styled.button`
    width: 80px;
    height: 40px;
    background-color: white;
    border: none;
    cursor: pointer;

    :hover {
        color: blue;
    }
`;

export const RegisterButton = styled.button`
    border: none;
    width: 80px;
    height: 40px;
    cursor: pointer;
    background: #ffd600;
    border-radius: 10px;

    :hover {
        color: blue;
    }
`;
