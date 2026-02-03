import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

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
import { useRequireLogin } from 'utils/useRequireLogin';
import axios from 'axios';

const Mypage = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : '';

  console.log(decoded)

  const [user, setUser] = useState({
    u_no: decoded.token_no,
    u_pic: '',
    u_nick: '',
    u_badge: '',
    u_desc: ''
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
  }

  return (
    <section className='mypage'>
      <div className="inner">
        <TitleCenter title={'마이페이지'} />
        <div className="profile">
          <div><img src={`http://localhost:9070/uploads/user/${decoded?.token_profile}`} alt="" /></div>

          <p className="profile-txt">
            {decoded?.token_nick}
            <span className='profile-badge'><Badge rank={decoded?.token_badge} /></span>
            <span className='profile-txt-detail'>
              {decoded?.token_desc}
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

        <Link to='/review' className='logout' onClick={handleLogout}><img src={LogoutImg} alt="로그아웃아이콘" /><span>로그아웃</span></Link>




      </div>
    </section>
  );
};

export default Mypage;