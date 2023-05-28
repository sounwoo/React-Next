import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 1200px;
    margin: 100px;
`;

export const TableTop = styled.div`
    border-top: 2px solid gray;
    height: 1px;
    margin-top: 20px;
`;

export const TableHeader = styled.div`
    width: 100%;
    height: 52px;
    display: flex;
    justify-content: row;
    line-height: 52px;
    border-bottom: 1px solid gray;

    :hover {
        color: blue;
    }
`;

export const ColumnHeaderBasic = styled.div`
    width: 10%;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
`;

export const ColumnHeaderTitle = styled.div`
    width: 70%;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
`;

export const ColumnBasic = styled.div`
    width: 10%;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
`;

export const ColumnTitle = styled.div`
    width: 70%;
    text-align: center;
    font-weight: 500;
    font-size: 18px;

    cursor: pointer;
`;

export const TableBottom = styled.div`
    border-bottom: 1px solid black;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
    width: 171px;
    height: 52px;
    background-color: white;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #f5f2fc;
    }
`;
