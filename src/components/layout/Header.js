import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import 'assets/scss/layout.scss';

import logo from 'assets/images/logo.png';
import bell from 'assets/images/icon_bell.png';

const Header = () => {
  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : '';
  const [user, setUser] = useState({
    u_no: '',
    u_id: '',
    u_nick: '',
    u_desc: '',
    u_pic: '',
    u_badge: '',
  });

  useEffect(() => {
    const token_no = decoded.token_no;

    axios.get(`http://localhost:9070/user/${token_no}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <header>
      <div className="inner">
        <h1 className="logo">
          <Link to={'/'} title='메인페이지로 이동'>
            <img src={logo} alt="EatMate 로고" />
          </Link>
        </h1>

        <div className='user-box'>
          {
            token &&
            <div className="img-box">
              <img src={`http://localhost:9070/uploads/user/${user.u_pic}`} alt="" />
            </div>
          }
          <button className="bell" onClick={() => alert('준비중인 페이지입니다.')}>
            <img src={bell} alt="벨" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;