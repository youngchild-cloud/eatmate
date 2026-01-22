import React from 'react';
import { Link } from 'react-router-dom';

import error from 'assets/images/404error/error.png';
import './notfound.scss';

const NotFound = () => {
  return (
    <>
      <section className='page404'>
        <article className="inner">

          {/* 404페이지 전체박스 */}
          <div className='error'>
            <div className='error-img'>
              <img src={error} alt="404error" />
            </div>

            <h2>찾으시는 페이지가 없습니다.</h2>
            <p>요청하신 페이지를 찾을 수 없습니다.</p>
            <p>입력하신 경로가 정확한지 다시 한번 확인해 주시기 바랍니다.</p>

            <Link to="/" title="메인페이지로 가기" >홈으로</Link>
          </div>


        </article>
      </section>

    </>
  );
};

export default NotFound;