import React from 'react';
import './RestaurantList.scss';
import TitleCenter from '../../components/common/TitleCenter';
import { Link } from 'react-router-dom';

const restaurantList = () => {
  return (
    <>
      <section className='review-search'>
        <div className="inner">
          <TitleCenter title={'식당 보기'} />
          <div className="search-box">
            <input type="search" name="search" id="search" placeholder='식당명을 검색하세요' />
            <button><span className="blind">검색</span></button>
          </div>
        </div>
      </section>

      <section className='restaurant-list'>
        <div className="inner">
          <div className="title-box">
            <h3 class="title">한식</h3>
            <div className="filter">
              <p className='filter-tit'>평점순</p>
              <ul className='filter-list'>
                <li className='act'><button>평점순</button></li>
                <li><button>리뷰순</button></li>
                <li><button>이름순</button></li>
              </ul>
            </div>
          </div>

          <ul className="list-box">
            <li>
              <Link to={'/restaurant/detail'}>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/restaurant01.jpg`} alt="식당ㄴ" />
                </div>
                <div className="txt-box">
                  <h4 className="tit">더 페어링</h4>
                  <p><span>4.3 (31)</span> · <span>잠실</span></p>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/restaurant/detail'}>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/restaurant01.jpg`} alt="식당ㄴ" />
                </div>
                <div className="txt-box">
                  <h4 className="tit">더 페어링</h4>
                  <p><span>4.3 (31)</span> · <span>잠실</span></p>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/restaurant/detail'}>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/restaurant01.jpg`} alt="식당ㄴ" />
                </div>
                <div className="txt-box">
                  <h4 className="tit">더 페어링</h4>
                  <p><span>4.3 (31)</span> · <span>잠실</span></p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default restaurantList;