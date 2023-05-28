import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 1200px;
    margin-left: 80px;
    margin-bottom: 80px;
`;

export const WrapperHeader = styled.div`
    width: 70px;
    height: 30px;
    display: flex;
    direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const Vector = styled.img``;

export const Comment = styled.div``;

export const WriterWrapper = styled.div`
    width: 50%;
    display: flex;
    direction: row;
    justify-content: space-between;
    align-items: center;
    /* background-color: red; */
`;

export const Writer = styled.input`
    width: 180px;
    height: 50px;
    padding-left: 20px;
`;

export const Password = styled.input`
    width: 180px;
    height: 50px;
    padding-left: 20px;
    margin-right: 24px;
`;

export const Label = styled.div`
    color: transparent; /* 기존 이모지 컬러 제거 */
    text-shadow: 0 0 0 #bdbdbd; /* 새 이모지 색상 부여 */
    cursor: pointer;

    :hover {
        color: yellow;
    }
`;

export const Input = styled.label`
    display: none;
`;

export const Body = styled.textarea`
    width: 1180px;
    height: 160px;
    margin-top: 20px;
    padding-left: 20px;
    padding-top: 20px;
    font-weight: 300;
    font-size: 16px;
    /* background-color: red; */
`;

export const Butten = styled.button``;
