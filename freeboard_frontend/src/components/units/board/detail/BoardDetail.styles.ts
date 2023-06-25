import styled from "@emotion/styled";

export const Wrapper = styled.div`
    width: 1200px;
    margin: 80px;
    margin-bottom: 40px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 20px;
`;

export const CardWrapper = styled.div`
    border: 1px solid black;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 102px;
    padding-right: 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0px 0px 10px gray;
`;

export const Writer = styled.div`
    font-weight: 500;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
`;

export const CreateAt = styled.div``;

export const Body = styled.div`
    width: 100%;
    margin-top: 80px;
`;
export const Title = styled.h1``;

export const Avatar = styled.img``;

export const AvatarWarpper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Content = styled.div`
    width: 100%;
    margin-bottom: 40px;
    font-size: 16px;
    font-weight: 500;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 40px;
    border-bottom: 1px solid #bdbdbd;
`;

export const Button = styled.button`
    width: 179px;
    height: 45px;
    background-color: white;
    border: 1px solid gray;
    margin: 0px 12px;
    cursor: pointer;

    :hover {
        background-color: gold;
        border-color: white;
    }
`;

export const LikeWarpper = styled.div`
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Like = styled.div`
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    cursor: pointer;

    :hover {
        color: #ffd600;
    }
`;

export const Youtube = styled.div`
    width: 700px;
    height: 500px;
    margin-top: 30px;
    margin-bottom: 100px;
`;

export const IconWarpper = styled.div``;

export const LinkIcon = styled.img``;

export const LocationIcon = styled.img`
    cursor: pointer;
    margin-left: 20px;
`;

export const Image = styled.img`
    width: 996px;
    height: 480px;
    margin-bottom: 30px;
`;
