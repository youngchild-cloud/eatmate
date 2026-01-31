import React from 'react';

import TitleCenter from 'components/common/TitleCenter';
import CpMeetup from 'components/meetup/CpMeetup';
import { useRequireLogin } from 'utils/useRequireLogin';

const MypageMeetup = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

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