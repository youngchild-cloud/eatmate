import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

function AdminHeader(props) {
  const [handleLogout, setHandleLogout] = useState(false);
  return (
    <section className='admin-header'>
      <div className='header-top'>
        <h1><Link to='/admin'><img src={Logo} alt="" /></Link></h1>
        <div className='admin-menu'>
          <ul>
            <li><Link to='/admin/restaurant'>맛집 관리</Link></li>
            <li><Link to='/admin/board'>게시판 관리</Link></li>
            <li><Link to='/admin/user'>회원 관리</Link></li>

          </ul>
          <div className='admin-info'>
            <img src={`${process.env.PUBLIC_URL}/images//meetup/user1.png`} alt="" />
            <p onClick={() => setHandleLogout(true)}>관리자님<span>&#9661;</span>{handleLogout && <Link to='/admin/login'><button className='admin-logout-btn'>로그아웃</button></Link>}</p>&#10072;

            <Link to='/review'>서비스 바로가기</Link>
          </div>
        </div>
      </div>
    </section >
  );
}

export default AdminHeader;