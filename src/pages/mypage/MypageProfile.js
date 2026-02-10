import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import './MypageProfile.scss';

import TitleCenter from 'components/common/TitleCenter';
import Input from 'components/common/Input';
import InputTextarea from 'components/common/InputTextarea';
import ButtonWide from 'components/common/ButtonWide';
import InputFile from 'components/common/InputFile';
import { useRequireLogin } from 'utils/useRequireLogin';

const MypageProfile = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  const [myProfileInput, setMyProfileInput] = useState({
    u_id: '',
    u_pw: '',
    u_pw2: '',
    u_nick: '',
    u_desc: '',
  });
  const [profileFile, setProfileFile] = useState(null);
  const [errPwText, setErrPwText] = useState('');
  const [isPwMatch, setIsPwMatch] = useState(false);
  const [originPic, setOriginPic] = useState(null);
  const [isNickChecked, setIsNickChecked] = useState(false);
  const [checkedNick, setCheckedNick] = useState('');
  const [originalNick, setOriginalNick] = useState('');
  const { user_no } = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지에 들어왔을 때 로그인 토큰이 있다면 메인 페이지로 강제 이동
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
      return;
    }

    // 페이지에 들어왔을 때 기존 유저값이 나오게
    axios.get(`http://localhost:9070/mypage/${user_no}`)
      .then(res => {
        setMyProfileInput(prev => ({
          ...prev,
          u_id: res.data.u_id,
          u_nick: res.data.u_nick,
          u_desc: res.data.u_desc,
        }))

        setOriginalNick(res.data.u_nick);
        setCheckedNick(res.data.u_nick);
        setIsNickChecked(true);
        setOriginPic(res.data.u_pic);
      })
      .catch(err => console.log(err));
  }, [navigate, user_no]);

  // input에 입력하면 value 변경
  const handleChange = (e) => {
    const { name, value } = e.target;

    setMyProfileInput(prev => ({
      ...prev,
      [name]: value
    }))

    if (name === 'u_nick') {
      setIsNickChecked(false);
      setCheckedNick('');
    }
  }

  // form 유효성검사 > 비밀번호 일치 확인
  useEffect(() => {
    if (!myProfileInput.u_pw2) {
      setErrPwText('동일한 비밀번호를 입력해주세요.');
      setIsPwMatch(false);
      return;
    }

    if (myProfileInput.u_pw === myProfileInput.u_pw2) {
      setErrPwText('입력하신 비밀번호가 일치합니다.');
      setIsPwMatch(true);
    } else {
      setErrPwText('입력하신 비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
      setIsPwMatch(false);
    }
  }, [myProfileInput.u_pw, myProfileInput.u_pw2]);

  // 닉네임 중복 확인 버튼
  const nickCheck = async () => {
    try {
      const res = await axios.post('http://localhost:9070/nickcheck', {
        u_nick: myProfileInput.u_nick
      });

      alert(res.data.message);
      setIsNickChecked(true);
      setCheckedNick(myProfileInput.u_nick);
      return true;
    } catch (err) {
      alert(err.response?.data?.message || '중복 확인 실패');
      setIsNickChecked(false);
      setCheckedNick('');
      return false;
    }
  };

  // submit 버튼 클릭시 프로필 수정이 되도록
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPwMatch) {
      alert(errPwText);
      return;
    }

    // 닉네임이 바뀐 경우에만 중복확인 강제
    const nickChanged = myProfileInput.u_nick !== originalNick;

    if (nickChanged && (!isNickChecked || checkedNick !== myProfileInput.u_nick)) {
      alert('닉네임 중복 확인을 먼저 해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('u_id', myProfileInput.u_id);
    formData.append('u_pw', myProfileInput.u_pw);
    formData.append('u_nick', myProfileInput.u_nick);
    formData.append('u_desc', myProfileInput.u_desc);

    if (profileFile) formData.append('u_pic', profileFile); // key 이름 중요(백엔드와 동일)

    try {
      await axios.put('http://localhost:9070/mypage/profile/modify/', formData);

      alert('프로필 수정이 완료되었습니다. 마이페이지로 이동합니다.');
      navigate('/mypage');
    } catch (err) {
      alert(err.response?.data?.error || '프로필 수정 실패');
    }
  };

  return (
    <section className='mypage-profile'>
      <div className="inner">
        <TitleCenter title='프로필 수정' />

        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            name='u_id'
            title='아이디'
            RequiredInput='(필수)'
            value={myProfileInput.u_id}
            readonly={true}
          />

          <Input
            type='password'
            name='u_pw'
            title='비밀번호'
            RequiredInput='(필수)'
            value={myProfileInput.u_pw}
            onChange={handleChange}
          />

          <Input
            type='password'
            name='u_pw2'
            title='비밀번호 확인'
            RequiredInput='(필수)'
            value={myProfileInput.u_pw2}
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
            defaultPreview={originPic}
            onFilesChange={(files) => setProfileFile(files[0] || null)}
          />

          <div className="nick-box">
            <Input
              type='text'
              name='u_nick'
              title='닉네임'
              SelectInput='(선택)'
              value={myProfileInput.u_nick}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={nickCheck}
            >
              중복 확인</button>
          </div>

          <InputTextarea
            name='u_desc'
            title='내 소개글'
            SelectInput='(선택)'
            value={myProfileInput.u_desc}
            onChange={handleChange}
          />

          <ButtonWide type='submit' text='수정 완료' />
        </form>
      </div>
    </section>
  );
};

export default MypageProfile;