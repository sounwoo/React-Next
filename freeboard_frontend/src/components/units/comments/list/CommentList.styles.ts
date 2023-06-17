import styled from "@emotion/styled";
import { Rate, Modal } from "antd";

export const Warpper = styled.div`
    width: 1200px;
    height: 130px;
    margin-top: 25px;
    margin-left: 80px;
    border-bottom: 1px solid #bdbdbd;
`;

export const Avatar = styled.img``;

export const Writer = styled.div`
    width: 15%;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Item = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 16px;
`;

export const Comment = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4f4f4f;
`;

export const CreatedAt = styled.div`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #bdbdbd;
`;

export const ItemWarpper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Star = styled(Rate)`
    margin-left: 15px;
    font-size: 18px;
    margin-bottom: 6px;
`;

export const DeleteButton = styled.img`
    cursor: pointer;
    margin-left: 10px;

    :hover {
        filter: opacity(0.5) drop-shadow(0 0 0 #000033);
    }
`;
export const EditButton = styled.img`
    cursor: pointer;

    :hover {
        filter: opacity(0.5) drop-shadow(0 0 0 #000033);
    }
`;

export const Option = styled.div`
    height: 16px;
    display: flex;
    flex-direction: row;
`;

export const Bottom = styled.div`
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-left: 64px;
`;
export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
    width: 50%;
    height: 20px;
    margin-top: 20px;
    margin-left: 10px;
`;

export const EditBT = styled.button`
    width: 91px;
    height: 52px;
    margin-bottom: 10px;
    background-color: black;
    border-radius: 5px;
    color: white;
    cursor: pointer;

    :hover {
        background-color: yellow;
        color: black;
        border: 1px solid gray;
        border-radius: 5px;
    }
`;

export const Content = styled.textarea`
    width: 98.8%;
    height: 60px;
    padding-top: 10px;
    padding-left: 10px;
    border: none;
`;

export const ContentsLength = styled.div`
    font-size: 13px;
    border: none;
    padding-left: 10px;
    color: #bdbdbd;
`;
