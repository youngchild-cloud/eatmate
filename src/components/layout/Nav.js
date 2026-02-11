import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import 'assets/scss/layout.scss';

import review from 'assets/images/icon_nav_reviews.png';
import meetup from 'assets/images/icon_nav_meetups.png';
import write from 'assets/images/icon_nav_write.png';
import community from 'assets/images/icon_nav_community.png';
import mypage from 'assets/images/icon_nav_mypage.png';
import login from 'assets/images/icon_nav_login.png';

const Nav = () => {
  const [navModal, setNavModal] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  // 로그인을 안 되어있다면 [글쓰기], [마이페이지] 진입 불가
  const requireLogin = (e) => {
    if (!token) {
      e.preventDefault();
      alert('로그인 후 사용 가능합니다.');
      navigate('/login');
      return false;
    }
    return true;
  }

  // '글쓰기 버튼' 클릭시
  const handleWriteClick = (e) => {
    // 로그인 안 되어있을 경우
    if (!requireLogin(e)) return;

    // 로그인 되어있을 경우
    e.preventDefault();
    setNavModal(true);
  };

  // '모달 검정 배경' 클릭시
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setNavModal(false);
    }
  }

  // url 이동 후 모달 닫기
  useEffect(() => {
    setNavModal(false);
  }, [pathname])

  // 모달이 열렸을 때는 body에 hidden을 주고, 닫혔을 때는 auto로 변경(스크롤 방지를 위해)
  useEffect(() => {
    document.body.classList.toggle('body-hidden', navModal);
    return () => document.body.classList.remove('body-hidden');
  }, [navModal]);

  return (
    <>
      <nav>
        <ul className="menus">
          <li>
            <NavLink
              to="/review"
              className={({ isActive }) => (isActive ? 'act' : '')}
            >
              <img src={review} alt="홈 아이콘" />
              홈
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/meetup"
              className={({ isActive }) => (isActive ? 'act' : '')}
            >
              <img src={meetup} alt="맛집 탐방 아이콘" />
              맛집 탐방
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/write"
              className={({ isActive }) => (isActive ? 'act' : '')}
              onClick={handleWriteClick}
            >
              <img src={write} alt="글쓰기 아이콘" />
              글쓰기
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community"
              className={({ isActive }) => (isActive ? 'act' : '')}
            >
              <img src={community} alt="자유게시판 아이콘" />
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mypage"
              className={({ isActive }) => (isActive ? 'act' : '')}
              onClick={requireLogin}
            >
              {
                token
                  ?
                  <>
                    <img src={mypage} alt="마이페이지" />
                    마이페이지
                  </>
                  :
                  <>
                    <img src={login} alt="로그인" />
                    로그인
                  </>
              }
            </NavLink>
          </li>
        </ul>
      </nav>

      {
        navModal &&
        <div className="nav-modal" onClick={handleModalClick}>
          <ul onClick={(e) => e.stopPropagation()}>
            <li><Link to={'/write/review'} title='맛집 리뷰 페이지로 이동'>맛집 리뷰</Link></li>
            <li><Link to={'/write/meetup'} title='맛집 탐방 페이지로 이동'>맛집 탐방</Link></li>
            <li><Link to={'/write/community'} title='자유게시판 페이지로 이동'>자유게시판</Link></li>
          </ul>
        </div>
      }
    </>
  );
};

export default Nav;