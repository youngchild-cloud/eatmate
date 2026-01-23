import React from 'react';
import { Link } from 'react-router-dom';
import './login.scss';

import PcInput from 'pages/admin/PcInput';

function Login(props) {
  return (

    <section className='admin-login'>
      <div className='pc-inner'>
        <h2>로그인</h2>
        <form className='admin-login-form'>
          <PcInput title={'아이디'} />
          <PcInput title={'비밀번호'} />
          <p className='check-box'>
            <input type="checkbox" id="check" />
            <label htmlFor="check">아이디 저장</label>
          </p>
          <p className='ld-join-box'>
            <Link to="/login">아이디/비밀번호 찾기</Link>
            <spna className="id-join-gap">|</spna>
            <Link to="/join">회원가입</Link>
          </p>
          <button type="submit">로그인하기</button>
        </form>
      </div>
    </section>
  );
}

export default Login;