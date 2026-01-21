import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

function AdminHeader(props) {
  return (
    <section className='admin-header'>
      <div className='header-top'>
        <h1><Link to='/admin'><img src={Logo} alt="" /></Link></h1>
        <div>
          <ul>
            <Link to='/restaurant'><li>맛집 관리</li></Link>
            <Link to='/reviews'><li>게시판 관리</li></Link>
            <Link to='/admin'><li>회원 관리</li></Link>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AdminHeader;