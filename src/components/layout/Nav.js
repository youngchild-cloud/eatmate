import React from 'react';
import '../../assets/scss/layout.scss';
import { NavLink } from 'react-router-dom';
import review from '../../assets/images/icon_nav_reviews.png';
import meetup from '../../assets/images/icon_nav_meetups.png';
import write from '../../assets/images/icon_nav_write.png';
import community from '../../assets/images/icon_nav_community.png';
import mypage from '../../assets/images/icon_nav_mypage.png';

const Nav = () => {
  return (
    <nav>
      <ul className="menus">
        <li>
          <NavLink
            to="/"
            end
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
          >
            <img src={mypage} alt="마이페이지" />
            마이페이지
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;