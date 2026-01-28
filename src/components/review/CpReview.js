import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CpReview.scss';
import Rank5 from 'components/review/Rank5';

const CpReview = () => {
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

  return (
    <>
      <ul className="cp-review">
        {
          reviewData.map(item => (
            <li>
              <Link to={'/review/detail'}>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/${item.br_img}`} alt={`${item.br_rt_name} 사진`} />
                </div>
                <div className="txt-box">
                  <p className='text'>{item.br_desc}</p>
                  <p className='name'>{item.br_rt_name}</p>
                  <p className='info'>
                    <span>(카테고리)</span> · <span>(위치)</span> | <span>{item.br_date}</span>
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