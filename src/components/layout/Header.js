import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import 'assets/scss/layout.scss';

import logo from 'assets/images/logo.png';
import bell from 'assets/images/icon_bell.png';

const Header = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [refreshUser, setRefreshUser] = useState(0);
  const [user, setUser] = useState({
    u_no: '',
    u_id: '',
    u_nick: '',
    u_desc: '',
    u_pic: '',
    u_badge: '',
  });

  // 토큰 변경 감지 (로그인 직후 Header 갱신용)
  useEffect(() => {
    const syncTokenAndUser = () => {
      setToken(localStorage.getItem('token')); // 토큰 갱신
      setRefreshUser(prev => prev + 1); // 유저 재조회 트리거
    };

    window.addEventListener('authchange', syncTokenAndUser); // 같은 탭에서 로그인/로그아웃 반영
    window.addEventListener('storage', syncTokenAndUser); // 다른 탭에서 로그인/로그아웃 반영

    return () => {
      window.removeEventListener('authchange', syncTokenAndUser);
      window.removeEventListener('storage', syncTokenAndUser);
    };
  }, []);


  // 토큰이 생기면 유저 정보 조회 / 토큰이 없으면 유저정보 초기화(로그아웃 즉시 반영)
  useEffect(() => {
    if (!token) {
      // 로그아웃 즉시 헤더 프로필 제거
      setUser({
        u_no: '',
        u_id: '',
        u_nick: '',
        u_desc: '',
        u_pic: '',
        u_badge: '',
      });
      return;
    }

    let decoded;
    try {
      decoded = jwtDecode(token);
    } catch (e) {
      // 토큰이 깨졌거나 이상하면 제거 + 헤더 갱신
      localStorage.removeItem('token');
      window.dispatchEvent(new Event('authchange'));
      return;
    }

    const token_no = decoded.token_no;

    axios.get(`http://localhost:9070/user/${token_no}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, [token, refreshUser]);

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
            token && user.u_pic &&
            <div className="img-box">
              <img
                src={`http://localhost:9070/uploads/user/${user.u_pic}?t=${Date.now()}`}
                alt="프로필"
              />
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
