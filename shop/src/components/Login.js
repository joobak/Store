import { useState } from 'react';
import './Login.css';

function Login({ onEnter, onClose }) {
const [mode, setMode] = useState('login'); // login | signup | find

return (
    <div className="login-page">
    <div className="login-box">

        {/* 닫기(홈) 버튼 */}
        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>
        {mode === 'login' && '로그인'}
        {mode === 'signup' && '회원가입'}
        {mode === 'find' && '아이디 / 비밀번호 찾기'}
        </h2>

        {/* 로그인 */}
        {mode === 'login' && (
        <>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />

            <button className="main-btn" onClick={onEnter}>
            로그인
            </button>

            <div className="login-links">
            <span onClick={() => setMode('signup')}>회원가입</span>
            <span onClick={() => setMode('find')}>아이디/비밀번호 찾기</span>
            </div>
        </>
        )}

        {/* 회원가입 */}
        {mode === 'signup' && (
        <>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <input type="password" placeholder="비밀번호 확인" />

            <button className="main-btn">회원가입</button>

            <div className="login-links">
            <span onClick={() => setMode('login')}>로그인으로</span>
            </div>
        </>
        )}

        {/* 아이디 / 비밀번호 찾기 */}
        {mode === 'find' && (
        <>
            <input type="text" placeholder="이메일 입력" />

            <button className="main-btn">찾기</button>

            <div className="login-links">
            <span onClick={() => setMode('login')}>로그인으로</span>
            </div>
        </>
        )}

    </div>
    </div>
);
}

export default Login;
