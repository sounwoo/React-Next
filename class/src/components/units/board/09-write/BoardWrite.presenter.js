import { BlueButton, RedInput } from './BoardWrite.styles';

export default function BoardWriteUI(props) {
    return (
        <>
            <div>@@@ 여기는 프리젠터입니다</div>
            작성자:
            <RedInput type="text" onChange={props.onChangeWriter} />
            제목:
            <input type="text" onChange={props.onChangeTitle} />
            내용:
            <input type="text" onChange={props.onChangeContents} />
            <BlueButton
                onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            >
                {props.isEdit ? '수정' : '등록'}하기
            </BlueButton>
            <div>@@@ 여기는 프리젠터입니다</div>
        </>
    );
}
