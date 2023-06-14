import styled from "@emotion/styled";

interface IPageProps {
    isActive?: boolean;
}

export const Warrper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Page = styled.span`
    margin: 10px;
    cursor: pointer;
    color: ${(props: IPageProps) => (props.isActive ? "blue" : "black")};
    font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};

    :hover {
        color: ${(props: IPageProps) => (props.isActive ? "blue" : "green")};
    }
`;
