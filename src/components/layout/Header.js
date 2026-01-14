import React from 'react';
import '../../assets/scss/layout.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import bell from '../../assets/images/icon_bell.png'

const Header = () => {
  return (
    <header>
      <div className="inner">
        <h1 className="logo">
          <Link to={'/'} title='메인페이지로 이동'>
            <img src={logo} alt="EatMate 로고" />
          </Link>
        </h1>

        <button className="bell" onClick={() => alert('준비중인 페이지입니다.')}>
          <img src={bell} alt="벨" />
        </button>
      </div>
    </header>
  );
};

export default Header;