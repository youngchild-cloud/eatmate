import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';

import './ReviewList.scss';

import TitleLeft from 'components/common/TitleLeft';
import Search from 'components/review/Search';
import CpReview from 'components/review/CpReview';
import CpRestaurant from 'components/review/CpRestaurant';

import cate1 from 'assets/images/review/icon_cate01.png';
import cate2 from 'assets/images/review/icon_cate02.png';
import cate3 from 'assets/images/review/icon_cate03.png';
import cate4 from 'assets/images/review/icon_cate04.png';
import cate5 from 'assets/images/review/icon_cate05.png';
import cate6 from 'assets/images/review/icon_cate06.png';
import cate7 from 'assets/images/review/icon_cate07.png';
import cate8 from 'assets/images/review/icon_cate08.png';

const ReviewList = () => {
  // 검색
  const [formSearch, setFormSearch] = useState(''); // 검색 입력값
  const [searchKeyword, setSearchKeyword] = useState(''); // 실제 검색에 사용되는 키워드

  const handleSubmitSearch = () => {
    const keyword = formSearch.trim();  // 공백 제거
    setSearchKeyword(keyword);
  };

  const isSearching = !!searchKeyword; // 검색중 여부

  return (
    <>
      <section className='review-search'>
        <div className="inner">
          <TitleLeft title={'맛집 리뷰'} link={'/write/review'} linkTitle={'맛집 리뷰 글쓰기'} text={'리뷰 쓰기'} />

          <Search
            value={formSearch}
            onChange={setFormSearch}
            onSubmit={handleSubmitSearch}
          />
        </div>
      </section>

      {
        isSearching ?
          <>
            <section className='review-list-search'>
              <div className="inner">
                <div className="review-title-box">
                  <h3 className="review-title">검색 결과</h3>
                  <button className='back-btn' onClick={() => {
                    setFormSearch('');
                    setSearchKeyword('');
                  }}>
                    초기화
                    <FontAwesomeIcon icon={faArrowRotateRight} />
                  </button>
                </div>

                <CpRestaurant searchKeyword={searchKeyword} />
              </div>
            </section>
          </>
          :
          <>
            <section className='review-list-category'>
              <div className="inner">
                <div className="review-title-box">
                  <h3 className="review-title">맛집 카테고리 보기</h3>
                </div>
                <ul className="categorys">
                  <li>
                    <Link to={'/review/restaurant/cate1'}>
                      <img src={cate1} alt="한식 아이콘" />
                      <span>한식</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/review/restaurant/cate2'}>
                      <img src={cate2} alt="일식 아이콘" />
                      <span>일식</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/review/restaurant/cate3'}>
                      <img src={cate3} alt="중식 아이콘" />
                      <span>중식</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/review/restaurant/cate4'}>
                      <img src={cate4} alt="양식 아이콘" />
                      <span>양식</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/review/restaurant/cate5'}>
                      <img src={cate5} alt="분식 아이콘" />
                      <span>분식</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/review/restaurant/cate6'}>
                      <img src={cate6} alt="카페 아이콘" />
                      <span>카페</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/review/restaurant/cate7'}>
                      <img src={cate7} alt="디저트 아이콘" />
                      <span>디저트</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/review/restaurant/cate8'}>
                      <img src={cate8} alt="기타 아이콘" />
                      <span>기타</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

            <section className='review-list-review'>
              <div className="inner">
                <div className="review-title-box">
                  <h3 className="review-title">전체 리뷰 보기</h3>
                </div>

                <CpReview />
              </div>
            </section>
          </>
      }
    </>
  );
};

export default ReviewList;