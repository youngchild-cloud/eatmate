import { useEffect, useState } from 'react';
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
  const [checkInput, setCheckInput] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지에 들어왔을 때 로그인 토큰이 있다면 메인 페이지로 강제 이동
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }

    // 페이지에 들어왔을 때 저장된 아이디가 있다면 불러오기
    const savedId = localStorage.getItem('id_save');
    if (savedId) {
      setIoginInput(prev => ({ ...prev, u_id: savedId }));
      setCheckInput(true);
    }
  }, []);

  // input값이 변경되면 상태변수에 저장
  const handleChange = (e) => {
    const { name, value } = e.target;

    setIoginInput(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // form을 submit 했을 때
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 비동기 통신으로 값을 전달하고, 토큰을 생성
      const res = await axios.post('http://localhost:9070/login', loginInput);
      localStorage.setItem('token', res.data.token);

      // 아이디 저장 체크박스 선택시 save_id값 생성/체크박스 해지시 save_id값 삭제
      if (checkInput) {
        localStorage.setItem('id_save', loginInput.u_id);
      } else {
        localStorage.removeItem('id_save')
      }

      // 완료 팝업과 url 이동
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
            <input
              type="checkbox"
              name="u_ck"
              id="u_ck"
              checked={checkInput}
              onChange={() => setCheckInput(prev => !prev)}
            />
            <label htmlFor="u_ck">아이디 저장</label>
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