import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';

import PcInput from 'components/admin/PcInput';
import axios from 'axios';

function Login(props) {

  const [form, setForm] = useState({
    au_id: '',
    au_pw: ''
  });
  const [error, setError] = useState('')

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9070/admin/login', form)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('au_id', form.au_id);

        alert('로그인성공! 메인페이지로 이동합니다.');
        navigate('/admin/user');
      })
      .catch(() => {
        alert('로그인 실패: 아이디 또는 비밀번호를 확인하세요.')
      })
  }



  return (

    <section className='admin-login'>
      <div className='pc-inner'>
        <h2>로그인</h2>
        <form className='admin-login-form' onSubmit={handleSubmit}>
          <PcInput title={'아이디'} name={"au_id"} value={form.au_id} onChange={handleChange} />
          <PcInput type={'password'} title={'비밀번호'} name={"au_pw"} value={form.au_pw} onChange={handleChange} />
          <p className='check-box'>
            <input type="checkbox" id="check" />
            <label htmlFor="check">아이디 저장</label>
          </p>
          <p className='ld-join-box'>
            <Link to="/admin/login">아이디/비밀번호 찾기</Link>
            <span className="id-join-gap">|</span>
            <Link to="/admin/join">회원가입</Link>
          </p>
          <button type="submit">로그인하기</button>
        </form>
      </div>
    </section>
  );
}

export default Login;