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
                <div className='rank-date'>
                  <Rank5 num={`${reviewData.br_rank}`} />
                  <span className="date">{dateFormat(reviewData.br_date)}</span>
                </div>
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

              <Link to={`/review/restaurant/detail/${reviewData.br_rt_no}`} title={`${reviewData.rt_name} 상세보기 페이지로 이동`} className='link'>#{reviewData.rt_name}</Link>

              <HeartComment heart={reviewData.br_heart} comment={reviewData.br_comment} />
            </div>
          </article>
        }

        {/* p_board_cate는 게시판 카테고리(review, meetup, community) / p_board_no는 게시글 번호를 넘겨주시면 됩니다. */}
        <Chat p_board_cate={'review'} p_board_no={br_no} />
      </div>
    </section>
  );
};

export default ReviewDetail;