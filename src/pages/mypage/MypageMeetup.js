import React from 'react';

import TitleCenter from 'components/common/TitleCenter';
import CpMeetup from 'components/meetup/CpMeetup';

const MypageMeetup = () => {
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