import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './login.scss';

import PcInput from 'components/admin/PcInput';

function Login(props) {
  const [loginInput, setIoginInput] = useState({
    au_id: '',
    au_pw: ''
  });
  const [checkInput, setCheckInput] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    // AdminPrivateRoute에서 넘어온 메시지(alert) 처리
    const msg = location.state?.message;
    if (msg) {
      alert(msg);
      // state 제거(뒤로가기/재진입 시 alert 반복 방지)
      navigate(location.pathname, { replace: true, state: null });
    }

    // 페이지에 들어왔을 때 로그인 토큰이 있다면 메인 페이지로 강제 이동
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      navigate('/admin');
    }

    // 페이지에 들어왔을 때 저장된 아이디가 있다면 불러오기
    const savedId = localStorage.getItem('admin_id_save');
    if (savedId) {
      setIoginInput(prev => ({ ...prev, au_id: savedId }));
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
      const res = await axios.post('http://localhost:9070/admin/login', loginInput);
      localStorage.setItem('adminToken', res.data.adminToken);

      // 아이디 저장 체크박스 선택시 save_id값 생성/체크박스 해지시 save_id값 삭제
      if (checkInput) {
        localStorage.setItem('admin_id_save', loginInput.au_id);
      } else {
        localStorage.removeItem('admin_id_save')
      }

      // 완료 팝업과 url 이동
      alert('로그인 완료되었습니다. 메인 페이지로 이동합니다.');
      navigate('/admin');
    } catch (err) {
      alert(err.response.data.error);
    }
  }

  return (
    <section className='admin-login'>
      <div className='pc-inner'>
        <h2>로그인</h2>

        <form className='admin-login-form' onSubmit={handleSubmit}>
          <PcInput
            type='text'
            name='au_id'
            title='아이디'
            value={loginInput.au_id}
            onChange={handleChange}
          />

          <PcInput
            type='password'
            name='au_pw'
            title='비밀번호'
            value={loginInput.au_pw}
            onChange={handleChange}
          />

          <div className="check-box">
            <input
              type="checkbox"
              name="au_ck"
              id="au_ck"
              checked={checkInput}
              onChange={() => setCheckInput(prev => !prev)}
            />
            <label htmlFor="au_ck">아이디 저장</label>
          </div>

          <p className='ld-join-box'>
            <Link onClick={() => alert('준비중인 페이지입니다.')} title='준비중인 페이지입니다.'>아이디/비밀번호 찾기</Link>
            <span className="id-join-gap">|</span>
            <Link to="/admin/join" title='회원가입 페이지로 이동'>회원가입</Link>
          </p>

          <button type="submit">로그인</button>
        </form>
      </div>
    </section>
  );
}

export default Login;