import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import './ReviewDetail.scss';

import TitleCenter from 'components/common/TitleCenter';
import Badge from 'components/common/Badge';
import Rank5 from 'components/review/Rank5';
import HeartComment from 'components/common/HeartComment';
import Chat from 'components/common/Chat';

const ReviewDetail = () => {
  const [reviewData, setReviewData] = useState(null);
  const { br_no } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.post('http://localhost:9070/review/detail', { br_no: Number(br_no) });

      setReviewData(res.data);
    };
    loadData();
  }, [br_no]);

  return (
    <section className='review-detail'>
      <div className="inner">
        <TitleCenter title={'리뷰 보기'} />

        {
          !reviewData ? (
            <div>로딩중...</div>
          ) : (
            <article className="review-con" key={reviewData.br_no}>
              <div className="profile-area">
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/review-profile01.jpg`} alt="프로필" />
                </div>
                <div className="txt-box">
                  <strong className='name'>
                    고래미
                    <Badge rank={'vip'} />
                  </strong>
                  <p className='rank-date'>
                    <Rank5 num={'5'} />
                    <span className="date">2026.01.06</span>
                  </p>
                </div>
              </div>
              <div className="image-area">
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/${reviewData.br_img}`} alt="리뷰" />
                </div>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/${reviewData.br_img}`} alt="리뷰" />
                </div>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/${reviewData.br_img}`} alt="리뷰" />
                </div>
              </div>
              <div className="text-area">
                <p>
                  {reviewData.br_desc}
                </p>

                <Link to={`/review/restaurant/detail/${reviewData.br_no}`} title={`${reviewData.br_rt_name} 상세보기 페이지로 이동`} className='link'>#{reviewData.br_rt_name}</Link>

                <HeartComment heart={reviewData.br_heart} comment={reviewData.br_comment} />
              </div>
            </article>
          )
        }

        <Chat />
      </div>
    </section>
  );
};

export default ReviewDetail;