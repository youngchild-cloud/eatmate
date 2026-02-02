import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './RestaurantDetail.scss';

import Rank5 from 'components/review/Rank5';

import { dateFormat } from 'utils/dateFormat';

import iconBack from 'assets/images/icon_back.png';
import icon01 from 'assets/images/review/icon_restaurant-detail01.png';
import icon02 from 'assets/images/review/icon_restaurant-detail02.png';
import icon03 from 'assets/images/review/icon_restaurant-detail03.png';
import icon04 from 'assets/images/review/icon_restaurant-detail04.png';

const RestaurantDetail = () => {
  // main에 다른 스타일을 주기 위해서 body 클래스 추가
  useEffect(() => {
    document.body.classList.add('restaurant-detail');

    return () => {
      document.body.classList.remove('restaurant-detail');
    }
  }, [])

  // 공유버튼 클릭시 현재 링크 복사
  const clip = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("링크 복사가 완료되었습니다.");
    } catch (err) {
      alert("복사에 실패했습니다. 다시 시도해주세요.");
    }
  };

  // 데이터 연결
  const [restaurantData, setRestaurantData] = useState('');
  const [reviewData, setReviewData] = useState([]);
  const { rt_no } = useParams();
  const navigate = useNavigate();

  // 맛집 데이터 연결
  const rtLoadData = async () => {
    try {
      const res = await axios.get(`http://localhost:9070/restaurant/detail/${rt_no}`);

      setRestaurantData(res.data);
    } catch (err) {
      console.log(err.response.data.error);
    }
  }

  // 리뷰 데이터 연결
  const rvLoadData = async () => {
    try {
      const res = await axios.get(`http://localhost:9070/review/${rt_no}`);

      setReviewData(res.data);
    } catch (err) {
      console.log(err.response.data.error);
    }
  }

  useEffect(() => {
    rtLoadData();
    rvLoadData();
  }, [rt_no])

  return (
    <>
      {
        <>
          <section className='restaurant-detail-infomation'>
            <article className='restaurant-detail-slide'>
              <button className='common-back' onClick={() => navigate(-1)}>
                <img src={iconBack} alt="뒤로 가기" />
                <span className="blind">뒤로 가기</span>
              </button>
              <Swiper
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                  type: 'fraction',
                }}
                modules={[Autoplay, Pagination]}
                className="restaurant-detail-swiper"
              >
                {
                  restaurantData.rt_img &&
                  <SwiperSlide>
                    <div className="img-box">
                      <img src={`http://localhost:9070/uploads/review/${restaurantData.rt_img}`} alt={`${restaurantData.rt_name} 메인`} />
                    </div>
                  </SwiperSlide>
                }
                {
                  restaurantData.rt_img2 &&
                  <SwiperSlide>
                    <div className="img-box">
                      <img src={`http://localhost:9070/uploads/review/${restaurantData.rt_img2}`} alt={`${restaurantData.rt_name} 메인`} />
                    </div>
                  </SwiperSlide>
                }
                {
                  restaurantData.rt_img3 &&
                  <SwiperSlide>
                    <div className="img-box">
                      <img src={`http://localhost:9070/uploads/review/${restaurantData.rt_img3}`} alt={`${restaurantData.rt_name} 메인`} />
                    </div>
                  </SwiperSlide>
                }
                {
                  restaurantData.rt_img4 &&
                  <SwiperSlide>
                    <div className="img-box">
                      <img src={`http://localhost:9070/uploads/review/${restaurantData.rt_img4}`} alt={`${restaurantData.rt_name} 메인`} />
                    </div>
                  </SwiperSlide>
                }
                {
                  restaurantData.rt_img5 &&
                  <SwiperSlide>
                    <div className="img-box">
                      <img src={`http://localhost:9070/uploads/review/${restaurantData.rt_img5}`} alt={`${restaurantData.rt_name} 메인`} />
                    </div>
                  </SwiperSlide>
                }
              </Swiper>
            </article>

            <article className='restaurant-detail-info'>
              <div className="inner">
                <div className="info-text">
                  <h2 className="title">{restaurantData.rt_name}</h2>
                  <p className='desc'>{restaurantData.rt_desc}</p>
                  <p className='disc'>
                    <span className='rank'>{restaurantData.rt_rank} ({restaurantData.rt_review})</span> · <span className='category'>{restaurantData.rt_cate}</span> · <span className='location'>{restaurantData.rt_location}</span>
                  </p>
                </div>
                <ul className='info-list'>
                  <li>
                    <a href={`tel:${restaurantData.rt_tel}`} title={`${restaurantData.rt_name} 전화하기`}>
                      <img src={icon01} alt="전화" />
                      <span>전화</span>
                    </a>
                  </li>
                  <li>
                    <a href={restaurantData.rt_map} title={`${restaurantData.rt_name} 카카오맵으로 이동(새창)`} target='_blank' rel='noopener noreferrer'>
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
                    <button onClick={clip}>
                      <img src={icon04} alt="공유" />
                      <span>공유</span>
                    </button>
                  </li>
                </ul>
              </div>
            </article>
          </section>

          <section className='restaurant-detail-review'>
            <div className="inner">
              <div className="restaurant-title-box">
                <h2 className="restaurant-title">리뷰 보기</h2>
                <Link to={'/write/review'} title='맛집 리뷰 글쓰기 페이지로 이동'>리뷰 쓰기 &gt;</Link>
              </div>
              <ul className='list'>
                {
                  reviewData.map(item => (
                    <li key={item.br_no}>
                      <Link to={`/review/detail/${item.br_no}`} title={`${item.rt_name} 리뷰 상세 페이지로 이동`}>
                        <div className="img-box">
                          <img src={`http://localhost:9070/uploads/review/${item.br_img}`} alt={`${item.rt_name} 리뷰`} />
                        </div>
                        <div className="txt-box">
                          <p className='text'>{item.br_desc}</p>
                          <Rank5 num={item.br_rank} />
                          <span className='date'>{dateFormat(item.br_date)}</span>
                        </div>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </section>
        </>
      }
    </>
  );
};

export default RestaurantDetail;