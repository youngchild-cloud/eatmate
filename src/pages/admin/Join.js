import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './join.scss';

import PcInput from 'components/admin/PcInput';
import PcInputFile from 'components/admin/PcInputFile';
import ButtonWide from 'components/common/ButtonWide';

const Join = () => {
  const [joinInput, setJoinInput] = useState({
    au_id: '',
    au_pw: '',
    au_pw2: '',
    au_name: '',
  });
  const [profileFile, setProfileFile] = useState(null);
  const [errPwText, setErrPwText] = useState('');
  const [isPwMatch, setIsPwMatch] = useState(false);

  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // 페이지에 들어왔을 때 로그인 토큰이 있다면 메인 페이지로 강제 이동
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      navigate('/admin');
    }
  }, []);

  // 아이디 중복 체크
  const idCheck = () => {
    axios.post('http://localhost:9070/admin/idcheck', {
      au_id: joinInput.au_id
    })
      .then(res => {
        if (res.data.exists) {
          setMessage('이미 사용중인 아이디입니다.');
          setError(true);
        } else {
          setMessage('사용가능한 아이디입니다.');
          setError(false);
        }
      });
  }

  useEffect(() => {
    // 아이디를 다 지우면 공란으로
    if (!joinInput.au_id) {
      setMessage('');
      return;
    }
    idCheck();
  }, [joinInput.au_id]);

  // form 유효성검사 > 비밀번호 일치 확인
  useEffect(() => {
    if (!joinInput.au_pw2) {
      setErrPwText('동일한 비밀번호를 입력해주세요.');
      setIsPwMatch(false);
      return;
    }

    if (joinInput.au_pw === joinInput.au_pw2) {
      setErrPwText('입력하신 비밀번호가 일치합니다.');
      setIsPwMatch(true);
    } else {
      setErrPwText('입력하신 비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
      setIsPwMatch(false);
    }
  }, [joinInput.au_pw, joinInput.au_pw2]);

  // input에 입력하면 value 변경
  const handleChange = (e) => {
    const { name, value } = e.target;

    setJoinInput(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // submit 버튼 클릭시 회원가입이 되도록
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPwMatch) {
      alert(errPwText);
      return;
    }

    const formData = new FormData();
    formData.append('au_id', joinInput.au_id);
    formData.append('au_pw', joinInput.au_pw);
    formData.append('au_name', joinInput.au_name);

    if (profileFile) formData.append('au_pic', profileFile); // key 이름 중요(백엔드와 동일)

    try {
      await axios.post('http://localhost:9070/admin/join', formData);

      alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      navigate('/admin/login');
    } catch (err) {
      alert(err.response?.data?.error || '회원가입 실패');
    }
  };

  return (
    <section className='admin-join'>
      <div className="pc-inner">
        <h2>회원가입</h2>

        <form onSubmit={handleSubmit}>
          <div className="join-mb">
            <PcInput
              type='text'
              name='au_id'
              title='아이디'
              RequiredInput='(필수)'
              value={joinInput.au_id}
              onChange={handleChange}
            />
            <p className='pw-text' style={{ color: error ? 'red' : 'blue' }}>
              {message}
            </p>
          </div>

          <div className="join-mb">
            <PcInput
              type='password'
              name='au_pw'
              title='비밀번호'
              RequiredInput='(필수)'
              value={joinInput.au_pw}
              onChange={handleChange}
            />
          </div>

          <div className="join-mb">
            <PcInput
              type='password'
              name='au_pw2'
              title='비밀번호 확인'
              RequiredInput='(필수)'
              value={joinInput.au_pw2}
              onChange={handleChange}
            />
            <p className='pw-text' style={{ color: isPwMatch ? 'blue' : 'red' }}>
              * {errPwText}
            </p>
          </div>

          <div className="join-mb">
            <PcInput
              type='text'
              name='au_name'
              title='이름'
              RequiredInput='(필수)'
              value={joinInput.au_name}
              onChange={handleChange}
            />
          </div>

          <div className="join-mb">
            <PcInputFile
              name="au_pic"
              title="프로필 사진"
              maxFiles={1}
              onFilesChange={(files) => setProfileFile(files[0] || null)}
            />
          </div>

          <ButtonWide type='submit' text='가입하기' />
        </form>
      </div>
    </section>
  );
};

export default Join;