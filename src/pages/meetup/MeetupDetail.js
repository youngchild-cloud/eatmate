import React from 'react';
import TitleCenter from '../../components/common/TitleCenter';
import ButtonWide from '../../components/common/ButtonWide';
import './meetupdetail.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import userBase from '../../assets/images/meetup/user-base.png';
import tabTxtImg1 from '../../assets/images/meetup/con-txt-img1.png';
import tabTxtImg2 from '../../assets/images/meetup/con-txt-img2.png';
import tabTxtImg3 from '../../assets/images/meetup/con-txt-img3.png';
import Chat from '../../components/common/Chat';

const MeetupDetail = () => {
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
            <span className='content-txt-detail'>혹시 미스터피자 좋아하는 사람?!
              <br />나랑 같이 피자 먹으러 가자
            </span>
          </p>
          <p className='content-info'>
            <span className='content-info-txt'><img src={tabTxtImg1} alt="달력아이콘" /> 2026.01.11</span>
            <span className='content-info-txt'><img src={tabTxtImg2} alt="위치아이콘" /> 미스터피자</span>
            <span className='content-info-txt'><img src={tabTxtImg3} alt="인원아이콘" /> 3/4</span>
          </p>
          <ButtonWide text={'참석하기'} />
          <p className='icon-num'>
            <span className='icon-num-first'><FontAwesomeIcon icon={faHeart} />10</span>
            <span><FontAwesomeIcon icon={faComment} />3</span>
          </p>
        </div>
        {/* 댓글 */}
        <Chat />
        {/* <div>
          <img src={userBase} alt="" />
          <input type="text" id="comment" />
          <label htmlFor="comment">입력</label>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/meetup/user1.png`} alt="" />

          <p>
            <span>빵야홈</span>
            <span>나 미피 진짜 좋아하는데 이날 늦게 가도 돼?!ㅠㅠㅠㅜ 제발 된다고 해줘</span>
            <span>2분전</span>
          </p>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/meetup/user1.png`} alt="" />

          <p>
            <span>빵야홈</span>
            <span>나 미피 진짜 좋아하는데 이날 늦게 가도 돼?!ㅠㅠㅠㅜ 제발 된다고 해줘</span>
            <span>2분전</span>
          </p>
        </div> */}




      </div>
    </section>
  );
};

export default MeetupDetail;