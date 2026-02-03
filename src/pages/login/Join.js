import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Join.scss';

import TitleCenter from 'components/common/TitleCenter';
import Input from 'components/common/Input';
import InputTextarea from 'components/common/InputTextarea';
import ButtonWide from 'components/common/ButtonWide';
import InputFile from 'components/common/InputFile';

const Join = () => {
  const [joinInput, setJoinInput] = useState({
    u_id: '',
    u_pw: '',
    u_pw2: '',
    u_desc: '',
  });
  const [profileFile, setProfileFile] = useState(null);
  const [errPwText, setErrPwText] = useState('');
  const [isPwMatch, setIsPwMatch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지에 들어왔을 때 로그인 토큰이 있다면 메인 페이지로 강제 이동
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, []);

  // input에 입력하면 value 변경
  const handleChange = (e) => {
    const { name, value } = e.target;

    setJoinInput(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // form 유효성검사 > 비밀번호 일치 확인
  useEffect(() => {
    if (!joinInput.u_pw2) {
      setErrPwText('동일한 비밀번호를 입력해주세요.');
      setIsPwMatch(false);
      return;
    }

    if (joinInput.u_pw === joinInput.u_pw2) {
      setErrPwText('입력하신 비밀번호가 일치합니다.');
      setIsPwMatch(true);
    } else {
      setErrPwText('입력하신 비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
      setIsPwMatch(false);
    }
  }, [joinInput.u_pw, joinInput.u_pw2]);

  // submit 버튼 클릭시 회원가입이 되도록
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPwMatch) {
      alert(errPwText);
      return;
    }

    const formData = new FormData();
    formData.append('u_id', joinInput.u_id);
    formData.append('u_pw', joinInput.u_pw);
    formData.append('u_desc', joinInput.u_desc);

    if (profileFile) formData.append('u_pic', profileFile); // key 이름 중요(백엔드와 동일)

    try {
      await axios.post('http://localhost:9070/join', formData);

      alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      navigate('/login');
    } catch (err) {
      alert(err.response?.data?.error || '회원가입 실패');
    }
  };

  return (
    <section className='join'>
      <div className="inner">
        <TitleCenter title='회원가입' />

        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            name='u_id'
            title='아이디'
            RequiredInput='(필수)'
            value={joinInput.u_id}
            onChange={handleChange}
          />

          <Input
            type='password'
            name='u_pw'
            title='비밀번호'
            RequiredInput='(필수)'
            value={joinInput.u_pw}
            onChange={handleChange}
          />

          <Input
            type='password'
            name='u_pw2'
            title='비밀번호 확인'
            RequiredInput='(필수)'
            value={joinInput.u_pw2}
            onChange={handleChange}
          />
          <p className='pw-text' style={{ color: isPwMatch ? 'blue' : 'red' }}>
            * {errPwText}
          </p>

          <InputFile
            name="u_pic"
            title="프로필 사진"
            SelectInput="(선택)"
            maxFiles={1}
            onFilesChange={(files) => setProfileFile(files[0] || null)}
          />

          <InputTextarea
            name='u_desc'
            title='내 소개글'
            SelectInput='(선택)'
            value={joinInput.u_desc}
            onChange={handleChange}
          />

          <ButtonWide type='submit' text='가입하기' />
        </form>
      </div>
    </section>
  );
};

export default Join;