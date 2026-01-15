import './ReviewList.scss';
import { Link } from 'react-router-dom';
import ButtonShort from '../../components/common/ButtonShort';
import cate1 from '../../assets/images/reviews/icon_cate01.png';
import cate2 from '../../assets/images/reviews/icon_cate02.png';
import cate3 from '../../assets/images/reviews/icon_cate03.png';
import cate4 from '../../assets/images/reviews/icon_cate04.png';
import cate5 from '../../assets/images/reviews/icon_cate05.png';
import cate6 from '../../assets/images/reviews/icon_cate06.png';
import cate7 from '../../assets/images/reviews/icon_cate07.png';
import cate8 from '../../assets/images/reviews/icon_cate08.png';

const ReviewList = () => {
  return (
    <>
      <section className='review-search'>
        <div className="inner">
          <div className="title-box">
            <h2 className="main-title">맛집 리뷰</h2>
            <ButtonShort type={'button'} text={'리뷰 쓰기'} />
          </div>
          <div className="search-box">
            <input type="search" name="search" id="search" placeholder='식당명을 검색하세요' />
            <button><span className="blind">검색</span></button>
          </div>
        </div>
      </section>

      <section className='review-category'>
        <div className="inner">
          <h3 className="review-title">식당 카테고리 보기</h3>
          <ul className="categorys">
            <li>
              <Link to={'/restaurant'}>
                <img src={cate1} alt="한식 아이콘" />
                <span>한식</span>
              </Link>
            </li>
            <li>
              <Link to={'/restaurant'}>
                <img src={cate2} alt="일식 아이콘" />
                <span>일식</span>
              </Link>
            </li>
            <li>
              <Link to={'/restaurant'}>
                <img src={cate3} alt="중식 아이콘" />
                <span>중식</span>
              </Link>
            </li>
            <li>
              <Link to={'/restaurant'}>
                <img src={cate4} alt="양식 아이콘" />
                <span>양식</span>
              </Link>
            </li>
            <li>
              <Link to={'/restaurant'}>
                <img src={cate5} alt="분식 아이콘" />
                <span>분식</span>
              </Link>
            </li>
            <li>
              <Link to={'/restaurant'}>
                <img src={cate6} alt="카페 아이콘" />
                <span>카페</span>
              </Link>
            </li>
            <li>
              <Link to={'/restaurant'}>
                <img src={cate7} alt="디저트 아이콘" />
                <span>디저트</span>
              </Link>
            </li>
            <li>
              <Link to={'/restaurant'}>
                <img src={cate8} alt="기타 아이콘" />
                <span>기타</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className='review-review'>
        <div className="inner">
          <h3 className="review-title">전체 리뷰 보기</h3>
          <ul className="reviews">
            <li>
              <Link to={'/review-detail'}>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/reviews/review01.jpg`} alt="리뷰" />
                </div>
                <div className="txt-box">
                  <p>크림파스타 넘맛있다 진짜 여기가 내 인생맛집인 듯</p>
                  <span className='name'>더 페어링</span>
                  <span className='cate'>양식 · 잠실 | 4시간 전</span>
                  <span className='rank rank5'><span className="blind">5점</span></span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/review-detail'}>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/reviews/review01.jpg`} alt="리뷰" />
                </div>
                <div className="txt-box">
                  <p>크림파스타 넘맛있다 진짜 여기가 내 인생맛집인 듯</p>
                  <span className='name'>더 페어링</span>
                  <span className='cate'>양식 · 잠실 | 4시간 전</span>
                  <span className='rank rank4'><span className="blind">5점</span></span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/review-detail'}>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/reviews/review01.jpg`} alt="리뷰" />
                </div>
                <div className="txt-box">
                  <p>크림파스타 넘맛있다 진짜 여기가 내 인생맛집인 듯</p>
                  <span className='name'>더 페어링</span>
                  <span className='cate'>양식 · 잠실 | 4시간 전</span>
                  <span className='rank rank3'><span className="blind">5점</span></span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/review-detail'}>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/reviews/review01.jpg`} alt="리뷰" />
                </div>
                <div className="txt-box">
                  <p>크림파스타 넘맛있다 진짜 여기가 내 인생맛집인 듯</p>
                  <span className='name'>더 페어링</span>
                  <span className='cate'>양식 · 잠실 | 4시간 전</span>
                  <span className='rank rank2'><span className="blind">5점</span></span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={'/review-detail'}>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/reviews/review01.jpg`} alt="리뷰" />
                </div>
                <div className="txt-box">
                  <p>크림파스타 넘맛있다 진짜 여기가 내 인생맛집인 듯</p>
                  <span className='name'>더 페어링</span>
                  <span className='cate'>양식 · 잠실 | 4시간 전</span>
                  <span className='rank rank1'><span className="blind">5점</span></span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ReviewList;