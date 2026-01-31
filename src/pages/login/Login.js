import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Login.scss';

import TitleCenter from 'components/common/TitleCenter';
import Input from 'components/common/Input';
import ButtonWide from 'components/common/ButtonWide';

const Login = () => {
  const [loginInput, setIoginInput] = useState({
    u_id: '',
    u_pw: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setIoginInput(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:9070/login', loginInput);
      localStorage.setItem('token', res.data.token);

      alert('로그인 완료되었습니다. 메인 페이지로 이동합니다.');
      navigate('/');
    } catch (err) {
      alert(err.response.data.error);
    }
  }

  return (
    <section className='login'>
      <div className="inner">
        <TitleCenter title={'로그인'} />

        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            name='u_id'
            title='아이디'
            value={loginInput.u_id}
            onChange={handleChange}
          />

          <Input
            type='password'
            name='u_pw'
            title='비밀번호'
            value={loginInput.u_pw}
            onChange={handleChange}
          />

          <div className="search-box">
            <input type="checkbox" name="l_chk" id="l_chk" />
            <label htmlFor="l_chk">아이디 저장</label>
          </div>

          <ul className="links">
            <li>
              <Link onClick={() => alert('준비중인 페이지입니다.')} title='준비중인 페이지입니다.'>아이디/비밀번호 찾기</Link>
            </li>
            <li>
              <Link to={'/join'} title='회원가입 페이지로 이동'>회원가입</Link>
            </li>
          </ul>

          <ButtonWide type={'submit'} text={'로그인'} />
        </form>
      </div>
    </section>
  );
};

export default Login;