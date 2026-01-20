import React, { useState } from 'react';
import './meetupdetail.scss';

import TitleCenter from '../../components/common/TitleCenter';
import ButtonWide from '../../components/common/ButtonWide';
import HeartComment from '../../components/common/HeartComment';
import Chat from '../../components/common/Chat';

import tabTxtImg1 from '../../assets/images/meetup/con-txt-img1.png';
import tabTxtImg2 from '../../assets/images/meetup/con-txt-img2.png';
import tabTxtImg3 from '../../assets/images/meetup/con-txt-img3.png';

const MeetupDetail = () => {

  const [toggleBtn, setToggleBtn] = useState(false);
  return (
    <section className='meetup-detail'>
      <div className="inner">
        <TitleCenter title={'맛집 탐방'} />

        <div className='user'>
          <div className='user-img'><img src={`${process.env.PUBLIC_URL}/images/meetup/user1.png`} alt="" /></div>
          <p className='user-info'>고래미<span className='user-info-gap'>&middot;</span>10분전</p>
        </div>

        <div className='content-box'>
          <img className="content-img" src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
          <p className='content-txt'>피자 같이 먹으러 갈 사람!
            <span className='content-txt-detail'>
              혹시 미스터피자 좋아하는 사람?!<br />
              나랑 같이 피자 먹으러 가자
            </span>
          </p>
          <p className='content-info'>
            <span className='content-info-txt'><img src={tabTxtImg1} alt="달력아이콘" /> 2026.01.11</span>
            <span className='content-info-txt'><img src={tabTxtImg2} alt="위치아이콘" /> 미스터피자</span>
            <span className='content-info-txt'><img src={tabTxtImg3} alt="인원아이콘" /> 3/4</span>
          </p>
          <ButtonWide text={'참석하기'} />

          <HeartComment heart={'10'} comment={'10'} />
        </div>

        {/* 댓글 */}
        <Chat />
      </div>
    </section>
  );
};

export default MeetupDetail;