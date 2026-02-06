import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CpReview.scss';
import Rank5 from 'components/review/Rank5';
import { dateFormat } from 'utils/dateFormat';

const CpReview = ({ mypageUser, mypageCategory }) => {
  // db 데이터값 가져오기
  const [reviewData, setReviewData] = useState([]);

  const loadData = async () => {
    try {
      let res;

      if (!mypageUser) {
        // 메인 - 맛집 리뷰 목록
        res = await axios.get('http://localhost:9070/review/all');
      } else {
        // 마이페이지 - 작성한 게시글 - 맛집 리뷰 목록
        res = await axios.get('http://localhost:9070/review', {
          params: { user_no: mypageUser, board_cate: mypageCategory }
        });
      }
      setReviewData(res.data);
    } catch (err) {
      // 백엔드에서 응답이 온 경우(4xx/5xx)
      if (err.response) {
        console.log(err.response.data?.error ?? err.response.statusText);
      }
      // 요청은 나갔는데 응답이 없는 경우(서버 다운/네트워크/CORS 등)
      else if (err.request) {
        console.log('서버에 연결할 수 없습니다. 백엔드를 실행했는지 확인하세요.');
      }
      // 그 외(코드 에러 등)
      else {
        console.log(err.message);
      }

      // 화면 깨지지 않게 빈 배열로
      setReviewData([]);
    }
  }

  useEffect(() => {
    loadData();
  }, [mypageUser, mypageCategory]);

  return (
    <>
      <ul className="cp-review">
        {
          reviewData.map(item => (
            <li key={item.br_no}>
              <Link to={`/review/detail/${item.br_no}`}>
                <div className="img-box">
                  <img src={`http://localhost:9070/uploads/review/${item.br_img}`} alt={`${item.rt_name} 사진`} />
                </div>
                <div className="txt-box">
                  <p className='text'>{item.br_desc}</p>
                  <p className='name'>{item.rt_name}</p>
                  <p className='info'>
                    <span>{item.rt_cate}</span> · <span>{item.rt_location}</span> | <span>{dateFormat(item.br_date)}</span>
                  </p>
                  <Rank5 num={item.br_rank} />
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default CpReview;