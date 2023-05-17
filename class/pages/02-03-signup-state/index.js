import { useState } from 'react';

export default function SignupStatePage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    function onChangeEamil(event) {
        console.log(event.target); // 작동된 태그
        console.log(event.target.value); // 작동된 태크에 입력된 값
        setEmail(event.target.value);
    }
    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    function onClickSignup() {
        console.log(email, password);

        // 검증하기
        if (!email.includes('@')) {
            // alert('이메일이 올바르지 않음');
            // document.getElementById('error').innerText = '이메일이 올바르지 않음';
            setEmailError('이메일이 올바르지 않음');
        } else if (!password) {
            setPasswordError('비밀번호를 입력해 주세요');
        } else {
            alert('회원가입 축하합니다.');
            // 메세지 알림 이후, 백엔드 컴퓨터에 있는 API함수 요청
        }
    }

    return (
        <>
            이메일 : <input type="text" onChange={onChangeEamil} />
            {/* <div id="error"></div> */}
            <div>{emailError}</div>
            비밀번호 : <input type="password" onChange={onChangePassword} />
            <div>{passwordError}</div>
            <button onClick={onClickSignup}>회원가입</button>
        </>
    );
}
