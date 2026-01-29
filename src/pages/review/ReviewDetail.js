import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import './ReviewDetail.scss';

import TitleCenter from 'components/common/TitleCenter';
import Badge from 'components/common/Badge';
import Rank5 from 'components/review/Rank5';
import HeartComment from 'components/common/HeartComment';
import Chat from 'components/common/Chat';

import { dateFormat } from 'utils/dateFormat';

const ReviewDetail = () => {
  const [reviewData, setReviewData] = useState('');
  const { br_no } = useParams();

  const loadData = async () => {
    try {
      const res = await axios.post(`http://localhost:9070/review/detail/${br_no}`);

      setReviewData(res.data);
    } catch (err) {
      console.log(err.response.data.error);
    }
  };

  useEffect(() => {
    loadData();
  }, [br_no])

  return (
    <section className='review-detail'>
      <div className="inner">
        <TitleCenter title={'리뷰 보기'} />

        {
          <article className="review-con" key={reviewData.br_no}>
            <div className="profile-area">
              <div className="img-box">
                <img src={`${process.env.PUBLIC_URL}/images/user/${reviewData.u_pic}`} alt={`${reviewData.u_nick} 프로필`} />
              </div>
              <div className="txt-box">
                <strong className='name'>
                  {reviewData.u_nick}
                  <Badge rank={`${reviewData.u_badge}`} />
                </strong>
                <p className='rank-date'>
                  <Rank5 num={`${reviewData.br_rank}`} />
                  <span className="date">{dateFormat(reviewData.br_date)}</span>
                </p>
              </div>
            </div>
            <div className="image-area">
              {
                reviewData.br_img &&
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/${reviewData.br_img}`} alt={`${reviewData.rt_name} 대표`} />
                </div>
              }
              {
                reviewData.br_img2 &&
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/${reviewData.br_img2}`} alt={`${reviewData.rt_name} 서브`} />
                </div>
              }
              {
                reviewData.br_img3 &&
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/${reviewData.br_img3}`} alt={`${reviewData.rt_name} 서브`} />
                </div>
              }
              {
                reviewData.br_img4 &&
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/${reviewData.br_img4}`} alt={`${reviewData.rt_name} 서브`} />
                </div>
              }
              {
                reviewData.br_img5 &&
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/${reviewData.br_img5}`} alt={`${reviewData.rt_name} 서브`} />
                </div>
              }
            </div>
            <div className="text-area">
              <p>
                {reviewData.br_desc}
              </p>

              <Link to={`/review/restaurant/detail/${reviewData.br_no}`} title={`${reviewData.br_rt_name} 상세보기 페이지로 이동`} className='link'>#{reviewData.rt_name}</Link>

              <HeartComment heart={reviewData.br_heart} comment={reviewData.br_comment} />
            </div>
          </article>
        }

        <Chat />
      </div>
    </section>
  );
};

export default ReviewDetail;