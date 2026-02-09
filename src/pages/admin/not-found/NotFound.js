import React from 'react';
import { Link } from 'react-router-dom';

import './notfound.scss';
import PcError from 'assets/images/404error/error.png';

function NotFound(props) {
  return (
    <section className='pc-not-found'>
      <h2 className="hidden">404에러 페이지</h2>
      <article className='pc-inner'>
        <img src={PcError} alt="404에러 페이지" />
        <h2>찾으시는 페이지가 없습니다.</h2>
        <p>요청하신 페이지를 찾을 수 없습니다.</p>
        <p className='error-txt'>입력하신 경로가 정확한지 다시 한번 확인해 주시기 바랍니다.</p>
        <Link to="/admin" title="관리자 페이지로 가기" >홈으로</Link>
      </article>
    </section >
  );
}

export default NotFound;