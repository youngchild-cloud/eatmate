import React from 'react';

import TitleCenter from 'components/common/TitleCenter';
import CpMeetup from 'components/meetup/CpMeetup';
import { useRequireLogin } from 'utils/useRequireLogin';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const MypageMeetup = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  //토큰만료 확인후 삭제
  if (token) {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  }

  return (
    <section className=''>
      <div className="inner">
        <TitleCenter title={'맛집 탐방 신청내역'} />

        <CpMeetup />
      </div>
    </section>
  );
};

export default MypageMeetup;