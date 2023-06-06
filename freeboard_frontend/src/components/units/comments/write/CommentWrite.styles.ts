import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    margin: 0px 80px;
`;

export const WrapperHeader = styled.div`
    width: 200px;
    height: 30px;
    display: flex;
    direction: row;
    align-items: center;
    margin-bottom: 30px;
`;

export const Vector = styled.img`
    margin-right: 10px;
`;

export const WriterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
`;

export const ContentsWrapper = styled.div`
    border: 1px solid lightgray;
`;

export const Input = styled.input`
    width: 180px;
    height: 52px;
    padding-left: 20px;
    border: 1px solid lightgray;
    margin-right: 20px;
`;

export const Contents = styled.textarea`
    width: 1157px;
    min-height: 108px;
    padding: 20px;
    margin-bottom: -6px;

    border: none;
`;

export const BottomWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ContentsLength = styled.div`
    padding-left: 20px;
    color: #bdbdbd;
`;

export const Button = styled.button`
    width: 91px;
    height: 52px;
    background: #000000;
    color: white;
    cursor: pointer;
    border-radius: 5px;

    :hover {
        background-color: yellow;
        color: black;
        border: 1px solid gray;
        border-radius: 5px;
    }
`;
