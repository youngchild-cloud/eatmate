import React from 'react';
import './adminlayout.scss';
import Logo from '../../assets/images/logo.png';

function AdminHeader(props) {
  return (
    <section className='admin-header'>
      <div className='header-top'>
        <h1><img src={Logo} alt="" /></h1>
        <div>
          <ul>
            <li>맛집 관리</li>
            <li>게시판 관리</li>
            <li>회원 관리</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AdminHeader;