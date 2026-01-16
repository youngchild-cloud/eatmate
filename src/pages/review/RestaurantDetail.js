import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './RestaurantDetail.scss'
import backIcon from '../../assets/images/icon_back.png';
import icon01 from '../../assets/images/review/icon_restaurant-detail01.png';
import icon02 from '../../assets/images/review/icon_restaurant-detail02.png';
import icon03 from '../../assets/images/review/icon_restaurant-detail03.png';
import icon04 from '../../assets/images/review/icon_restaurant-detail04.png';

const RestaurantDetail = () => {
  const navigate = useNavigate();

  // main에 다른 스타일을 주기 위해서 body에 클래스 추가
  useEffect(() => {
    document.body.classList.add('restaurant-detail');

    return () => {
      document.body.classList.remove('restaurant-detail');
    }
  }, [])

  return (
    <>
      <section className='restaurant-detail-infomation'>
        <div className="inner">
          <article className='restaurant-detail-slide'>
            <button className='common-back' onClick={() => navigate(-1)}>
              <img src={backIcon} alt="뒤로 가기" />
              <span className="blind">뒤로 가기</span>
            </button>
            <Swiper
              pagination={{
                type: 'fraction',
              }}
              modules={[Pagination]}
              className="restaurant-detail-swiper"
            >
              <SwiperSlide>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/restaurant-detail01.jpg`} alt="리뷰" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/restaurant-detail01.jpg`} alt="리뷰" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/restaurant-detail01.jpg`} alt="리뷰" />
                </div>
              </SwiperSlide>
            </Swiper>
          </article>

          <article className='restaurant-detail-info'>
            <div className="info-text">
              <h2 className="title">더 페어링</h2>
              <p className='desc'>잠실을 대표하는 식당</p>
              <p className='disc'>
                <span className='rank'>4.3 (31)</span> · <span className='category'>양식</span> · <span className='location'>잠실</span>
              </p>
            </div>
            <ul className='info-list'>
              <li>
                <a href="tel:02-0000-0000" title='전화하기'>
                  <img src={icon01} alt="전화" />
                  <span>전화</span>
                </a>
              </li>
              <li>
                <a href="https://place.map.kakao.com/9679364" title='카카오맵으로 이동(새창)' target='_blank' rel='noopener noreferrer'>
                  <img src={icon02} alt="길찾기" />
                  <span>길찾기</span>
                </a>
              </li>
              <li>
                <button>
                  <img src={icon03} alt="저장" />
                  <span>저장</span>
                </button>
              </li>
              <li>
                <button>
                  <img src={icon04} alt="공유" />
                  <span>공유</span>
                </button>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className='restaurant-detail-review'>
        <div className="inner">
          <div className="restaurant-title-box">
            <h2 className="restaurant-title">리뷰 보기</h2>
            <Link to={'/write/review'} title='맛집 리뷰 글쓰기 페이지로 이동'>리뷰 쓰기 &gt;</Link>
          </div>
          <ul className='list'>
            <li>
              <Link to={'/review/detail'} title='리뷰 상세 페이지로 이동'>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/restaurant-detail_review01.jpg`} alt="리뷰" />
                </div>
                <div className="txt-box">
                  <p className='text'>크림파스타 넘맛있다 진짜 여기가 내 인생 맛집인 듯</p>
                  <span className='rank rank5'><span className="blind">5점</span></span>
                  <span className='date'>2026.01.06</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/review/detail'} title='리뷰 상세 페이지로 이동'>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/restaurant-detail_review01.jpg`} alt="리뷰" />
                </div>
                <div className="txt-box">
                  <p className='text'>크림파스타 넘맛있다 진짜 여기가 내 인생 맛집인 듯</p>
                  <span className='rank rank5'><span className="blind">5점</span></span>
                  <span className='date'>2026.01.06</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/review/detail'} title='리뷰 상세 페이지로 이동'>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/restaurant-detail_review01.jpg`} alt="리뷰" />
                </div>
                <div className="txt-box">
                  <p className='text'>크림파스타 넘맛있다 진짜 여기가 내 인생 맛집인 듯</p>
                  <span className='rank rank5'><span className="blind">5점</span></span>
                  <span className='date'>2026.01.06</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default RestaurantDetail;