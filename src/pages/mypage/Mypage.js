import React from 'react';
import { Link } from 'react-router-dom';

import './mypage.scss';

import TitleCenter from 'components/common/TitleCenter';
import ButtonWide from 'components/common/ButtonWide';
import Badge from 'components/common/Badge';

import BookmarkImg from 'assets/images/mypage/bookmark.png';
import MeetupImg from 'assets/images/mypage/meetup.png';
import WriteImg from 'assets/images/mypage/write.png';
import CommentImg from 'assets/images/mypage/comment.png';
import HeartImg from 'assets/images/mypage/heart.png';
import LogoutImg from 'assets/images/mypage/logout.png';

const Mypage = () => {
  return (
    <section className='mypage'>
      <div className="inner">
        <TitleCenter title={'마이페이지'} />
        <div className="profile">
          <img src={`${process.env.PUBLIC_URL}/images/mypage/user-img.png`} alt="" />
          <p className="profile-txt">
            룰루랄라
            <span className='profile-badge'><Badge rank={'vip'} /></span>
            <span className='profile-txt-detail'>
              맛집을 좋아하고, 글쓰는걸 좋아하고, 사람을 좋아합니다. 저랑 같이 맛집 탐방 다니실 분들은 항상 환영해요!
            </span>
          </p>
        </div>

        <div className='profile-edit'><Link to='/mypage/profile'><ButtonWide text={'프로필 수정'} /></Link></div>


        <div className='line'>
          <Link to='/mypage/bookmark'><img src={BookmarkImg} alt="북마크아이콘" /><span>저장한 맛집</span></Link>
          <Link to='/mypage/meetup'><img src={MeetupImg} alt="맛집아이콘" /><span>맛집 탐방 신청내역</span></Link>
          <Link to='/mypage/write'><img src={WriteImg} alt="글쓰기아이콘" /><span>작성한 게시글</span></Link>
          <Link to='/mypage/like'><img src={HeartImg} alt="좋아요아이콘" /><span>내가 남긴 좋아요</span></Link>
          <Link to='/mypage/comment'><img src={CommentImg} alt="댓글아이콘" /><span>내가 남긴 댓글</span></Link>
        </div>

        <Link to='/review' className='logout'><img src={LogoutImg} alt="로그아웃아이콘" /><span>로그아웃</span></Link>




      </div>
    </section>
  );
};

export default Mypage;