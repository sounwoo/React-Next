import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./BoardWrite.types";

export const Wrapper = styled.div`
    width: 1200px;
    /* height: 1847px; */
    border: 1px solid black;
    margin: 100px;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: none; */
    box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 36px;
    font-weight: bold;
`;
export const WriterWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40px;
`;

export const Writer = styled.input`
    width: 486px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
    width: 486px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Label = styled.div`
    padding-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
`;

export const InputWrapper = styled.div`
    padding-top: 40px;
`;

export const Subject = styled.input`
    width: 1183px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Content = styled.textarea`
    width: 1183px;
    height: 480px;
    font-size: 16px;
    font-weight: 500;
    padding-left: 16px;
    padding-top: 16px;
    border: 1px solid #bdbdbd;
`;

export const FindMail = styled.div`
    width: 100%;
`;

export const Post = styled.input`
    width: 77px;
    height: 30px;
    padding-left: 45px;
    border: 1px solid #bdbdbd;
`;

export const SearchButton = styled.button`
    width: 120px;
    height: 35px;
    font-size: 16px;
    font-weight: 500;
    color: white;
    border: 1px solid #bdbdbd;
    background: black;
    margin-left: 16px;
    cursor: pointer;
`;

export const Adress = styled.input`
    width: 1183px;
    height: 52px;
    padding-left: 16px;
    margin-top: 16px;
    border: 1px solid #bdbdbd;
    font-size: 16px;
    font-weight: 500;
`;

export const Youtube = styled.input`
    width: 1183px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
    width: 1200px;
    /* padding-left: 16px; */
    padding-top: 40px;
`;

export const ImageBox = styled.div`
    display: flex;
`;

export const OptionWrapper = styled.div`
    width: 1200px;
    padding-top: 40px;
`;

export const RadioButton = styled.input`
    cursor: pointer;
    background: #ffd600;
`;

export const RadioLabel = styled.label`
    margin-left: 8px;
    margin-right: 20px;
    font-weight: 500;
    cursor: pointer;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
`;

export const SubmitButton = styled.button`
    width: 179px;
    height: 52px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    margin-left: 12px;
    margin-right: 12px;
    cursor: pointer;

    background-color: ${(props: ISubmitButtonProps) =>
        props.isActive ? "yellow" : "none"};
`;

export const UpdateButton = styled.button`
    width: 179px;
    height: 52px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    margin-left: 12px;
    margin-right: 12px;
    cursor: pointer;

    background-color: yellow;
`;

export const Error = styled.div`
    padding-top: 10px;
    font-size: 14px;
    color: red;
`;
