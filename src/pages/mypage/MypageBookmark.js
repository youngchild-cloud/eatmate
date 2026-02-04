import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

import './MypageBookmark.scss';

import TitleCenter from 'components/common/TitleCenter';
import CpRestaurant from 'components/review/CpRestaurant';
import { useRequireLogin } from 'utils/useRequireLogin';

const MypageBookmark = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : '';

  // 맛집 카테고리
  const [addAct, setAddAct] = useState(false);

  // 필터 act
  const [activeFilter, setActiveFilter] = useState('rating');

  const handleClick = (filter) => {
    setAddAct(false);

    setActiveFilter(filter);
  };

  return (
    <section className='mypage-bookmark'>
      <div className="inner">
        <TitleCenter title={'저장한 맛집'} />

        <div className="filter-box">
          <div className={`filter ${addAct ? 'act' : ''}`}> {/* act */}
            <p className='filter-tit' onClick={() => setAddAct(prev => !prev)}>
              <button>
                {
                  activeFilter === 'rating' ?
                    '평점순' :
                    (activeFilter === 'review' ? '리뷰순' : '이름순')
                }
              </button>
            </p>
            <ul className="filter-list">
              <li
                className={activeFilter === 'rating' ? 'act' : ''}
                onClick={() => handleClick('rating')}
              >
                <button>평점순</button>
              </li>

              <li
                className={activeFilter === 'review' ? 'act' : ''}
                onClick={() => handleClick('review')}
              >
                <button>리뷰순</button>
              </li>

              <li
                className={activeFilter === 'name' ? 'act' : ''}
                onClick={() => handleClick('name')}
              >
                <button>이름순</button>
              </li>
            </ul>
          </div>
        </div>

        <CpRestaurant filter={activeFilter} mypageUser={decoded.token_no} />
      </div>
    </section>
  );
};

export default MypageBookmark;