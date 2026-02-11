import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import './mypage.scss';

import TitleCenter from 'components/common/TitleCenter';
import Badge from 'components/common/Badge';
import { useRequireLogin } from 'utils/useRequireLogin';

import BookmarkImg from 'assets/images/mypage/bookmark.png';
import MeetupImg from 'assets/images/mypage/meetup.png';
import WriteImg from 'assets/images/mypage/write.png';
import CommentImg from 'assets/images/mypage/comment.png';
import HeartImg from 'assets/images/mypage/heart.png';
import LogoutImg from 'assets/images/mypage/logout.png';

const Mypage = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : '';

  const [mypageData, setMyPageDate] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const user_no = decoded.token_no;

    axios.get(`http://localhost:9070/mypage/${user_no}`)
      .then(res => setMyPageDate(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      localStorage.removeItem('token');
      alert('로그아웃 되었습니다. 메인 페이지로 이동합니다.');
      navigate('/');
    } else {
      return;
    }
  }

  return (
    <section className='mypage'>
      <div className="inner">
        <TitleCenter title={'마이페이지'} />

        <div className="profile">
          <div className='profile-img'>
            <img src={`http://localhost:9070/uploads/user/${mypageData.u_pic}`} alt="" />
          </div>

          <p className="profile-txt">
            {mypageData.u_nick}
            <Badge rank={mypageData.u_badge} />
            <span className='profile-txt-detail'>{mypageData.u_desc}</span>
          </p>
        </div>

        <div className='profile-edit'><Link to={`/mypage/profile/${decoded.token_no}`}>프로필 수정</Link></div>

        <div className='line'>
          <Link to={`/mypage/bookmark/${decoded.token_no}`}><img src={BookmarkImg} alt="북마크 아이콘" /><span>저장한 맛집</span></Link>
          <Link to={`/mypage/meetup/${decoded.token_no}`}><img src={MeetupImg} alt="맛집 아이콘" /><span>맛집 탐방 신청내역</span></Link>
          <Link to={`/mypage/write/${decoded.token_no}`}><img src={WriteImg} alt="글쓰기 아이콘" /><span>작성한 게시글</span></Link>
          <Link to={`/mypage/like/${decoded.token_no}`}><img src={HeartImg} alt="좋아요 아이콘" /><span>내가 남긴 좋아요</span></Link>
          <Link to={`/mypage/comment/${decoded.token_no}`}><img src={CommentImg} alt="댓글 아이콘" /><span>내가 남긴 댓글</span></Link>
        </div>

        <button className='logout' onClick={handleLogout}><img src={LogoutImg} alt="로그아웃 아이콘" /><span>로그아웃</span></button>
      </div>
    </section>
  );
};

export default Mypage;