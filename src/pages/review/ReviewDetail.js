import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

import './ReviewDetail.scss';

import TitleCenter from 'components/common/TitleCenter';
import Badge from 'components/common/Badge';
import Rank5 from 'components/review/Rank5';
import HeartComment from 'components/common/HeartComment';
import Chat from 'components/common/Chat';
import { dateFormat } from 'utils/dateFormat';

import more from 'assets/images/review/btn_board.png';

const ReviewDetail = () => {
  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : '';
  const [reviewData, setReviewData] = useState('');
  const [modalShow, setModleShow] = useState(false);
  const { br_no } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, [br_no])

  // 게시물 가져오기
  const loadData = async () => {
    try {
      const res = await axios.post(`http://localhost:9070/review/detail/${br_no}`);

      setReviewData(res.data);
    } catch (err) {
      console.log(err.response.data.error);
    }
  };

  // 본인이 작성한 게시글일 경우 삭제 가능
  const boardDelete = async (br_no) => {
    if (window.confirm('해당 게시글을 삭제하시겠습니까?')) {
      try {
        await axios.delete(`http://localhost:9070/review/detail/${br_no}`);

        alert('해당 게시글이 삭제되었습니다. 맛집 목록 페이지로 이동합니다.');
        navigate('/review');
      } catch (err) {
        console.log(err.response.data.message);
      }
    } else {
      return;
    }
  }

  return (
    <section className='review-detail'>
      <div className="inner">
        <TitleCenter title={'리뷰 보기'} />

        <div className="review-con" key={reviewData.br_no}>
          <div className="profile-area">
            <div className="img-box">
              <img src={`http://localhost:9070/uploads/user/${reviewData.u_pic}`} alt={`${reviewData.u_nick} 프로필`} />
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
            {
              reviewData.br_user_no === decoded.token_no &&
              <div className='more-box'>
                <button
                  className='more-btn'
                  onClick={() => setModleShow(prev => !prev)}
                >
                  <img src={more} alt="더보기" />
                </button>
                <ul className={`more-list ${modalShow && 'act'}`}>
                  <li><Link to={`/write/review/${reviewData.br_no}`} title='글쓰기 수정 페이지로 이동'>수정</Link></li>
                  <li><button onClick={() => boardDelete(reviewData.br_no)}>삭제</button></li>
                </ul>
              </div>
            }
          </div>
          <div className="image-area">
            {
              reviewData.br_img &&
              <div className="img-box">
                <img src={`http://localhost:9070/uploads/review/${reviewData.br_img}`} alt={`${reviewData.rt_name} 대표`} />
              </div>
            }
            {
              reviewData.br_img2 &&
              <div className="img-box">
                <img src={`http://localhost:9070/uploads/review/${reviewData.br_img2}`} alt={`${reviewData.rt_name} 서브`} />
              </div>
            }
            {
              reviewData.br_img3 &&
              <div className="img-box">
                <img src={`http://localhost:9070/uploads/review/${reviewData.br_img3}`} alt={`${reviewData.rt_name} 서브`} />
              </div>
            }
            {
              reviewData.br_img4 &&
              <div className="img-box">
                <img src={`http://localhost:9070/uploads/review/${reviewData.br_img4}`} alt={`${reviewData.rt_name} 서브`} />
              </div>
            }
            {
              reviewData.br_img5 &&
              <div className="img-box">
                <img src={`http://localhost:9070/uploads/review/${reviewData.br_img5}`} alt={`${reviewData.rt_name} 서브`} />
              </div>
            }
          </div>
          <div className="text-area">
            <p>
              {reviewData.br_desc}
            </p>

            <Link to={`/review/restaurant/detail/${reviewData.br_rt_no}`} title={`${reviewData.rt_name} 상세보기 페이지로 이동`} className='link'>#{reviewData.rt_name}</Link>

            {/* p_board_cate는 게시판 카테고리(review, meetup, community) / p_board_no는 게시글 번호 / p_user_token는 토큰값을 decoded해서 넘겨주시면 됩니다. */}
            <HeartComment heart={reviewData.br_heart} comment={reviewData.br_comment} p_board_cate={'review'} p_board_no={br_no} p_user_token={decoded} />
          </div>
        </div>

        {/* p_board_cate는 게시판 카테고리(review, meetup, community) / p_board_no는 게시글 번호를 넘겨주시면 됩니다. */}
        <Chat
          p_board_cate={'review'}
          p_board_no={br_no}
          onRefreshBoard={loadData}
        />
      </div>
    </section>
  );
};

export default ReviewDetail;