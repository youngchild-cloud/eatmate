import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from 'assets/images/logo.png';

function AdminHeader(props) {
  const [handleLogout, setHandleLogout] = useState(false);

  return (
    <section className='admin-header'>
      <div className='admin-header-inner'>
        <h1><Link to='/admin' title='관리자 메인 페이지로 이동'><img src={Logo} alt="" /></Link></h1>

        <div className='admin-menu'>
          <ul>
            <li>
              <NavLink
                to='/admin/restaurant'
                className={({ isActive }) => (isActive ? 'act' : '')}
                title='맛집 관리 페이지로 이동'
              >
                맛집 관리
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/admin/board'
                className={({ isActive }) => (isActive ? 'act' : '')}
                title='게시판 관리 페이지로 이동'
              >
                게시판 관리
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/admin/user'
                className={({ isActive }) => (isActive ? 'act' : '')}
                title='회원 관리 페이지로 이동'
              >
                회원 관리
              </NavLink>
            </li>
          </ul>

          <div className='admin-info'>
            <img src={`${process.env.PUBLIC_URL}/images//meetup/user1.png`} alt="" />
            <p onClick={() => setHandleLogout(prev => !prev)} className={handleLogout ? 'up' : 'down'}>
              관리자님<span></span>
              {
                handleLogout &&
                <Link to='/admin/login' title='관리자 페이지 로그아웃 하기'>
                  <button className='admin-logout-btn'>로그아웃</button>
                </Link>
              }
            </p>
            &#10072;
            <Link to='/review' className='EatMate 서비스 메인 페이지로 이동'>서비스 바로가기</Link>
          </div>
        </div>
      </div>
    </section >
  );
}

export default AdminHeader;