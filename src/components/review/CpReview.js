import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CpReview.scss';
import Rank5 from 'components/review/Rank5';

const CpReview = () => {
  // db 데이터값 가져오기
  const [reviewData, setReviewData] = useState([]);

  const loadData = async () => {
    try {
      const res = await axios.get('http://localhost:9070/review');
      setReviewData(res.data);
    } catch (err) {
      console.log('axios error:', err);
      console.log('status:', err?.response?.status);
      console.log('data:', err?.response?.data);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  // 날짜 함수
  const dateFormat = (writeDate) => {
    const date = new Date(writeDate);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}.${month}.${day}`;
  }

  return (
    <>
      <ul className="cp-review">
        {
          reviewData.map(item => (
            <li key={item.br_no}>
              <Link to={`/review/detail/${item.br_no}`}>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/${item.br_img}`} alt={`${item.br_rt_name} 사진`} />
                </div>
                <div className="txt-box">
                  <p className='text'>{item.br_desc}</p>
                  <p className='name'>{item.br_rt_name}</p>
                  <p className='info'>
                    <span>(카테고리)</span> · <span>(위치)</span> | <span>{dateFormat(item.br_date)}</span>
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