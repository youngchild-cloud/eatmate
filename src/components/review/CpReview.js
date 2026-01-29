import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CpReview.scss';
import Rank5 from 'components/review/Rank5';
import { dateFormat } from 'utils/dateFormat';

const CpReview = () => {
  // db 데이터값 가져오기
  const [reviewData, setReviewData] = useState([]);

  const loadData = async () => {
    try {
      const res = await axios.get('http://localhost:9070/review');
      setReviewData(res.data);
    } catch (err) {
      console.log(err.response.data.error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <ul className="cp-review">
        {
          reviewData.map(item => (
            <li key={item.br_no}>
              <Link to={`/review/detail/${item.br_no}`}>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/${item.br_img}`} alt={`${item.rt_name} 사진`} />
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