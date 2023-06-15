import styled from "@emotion/styled";

interface INavigationProps {
    isActive?: boolean;
}

export const Warpper = styled.div`
    height: 64px;
    display: flex;
    direction: row;
    justify-content: center;
    align-items: center;
    background: #ffd600;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
`;

export const Menu = styled.div`
    width: 100px;
    font-size: 15px;
    cursor: pointer;
    border: none;
    border-right: 1px solid white;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    color: ${(props: INavigationProps) =>
        props.isActive ? "black" : "#ab9000"};
`;
