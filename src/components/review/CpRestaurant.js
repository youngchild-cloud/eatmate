import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import './CpRestaurant.scss'

const CpRestaurant = ({ category, filter }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const restaurantInfo = { // props로 받은 값을 백엔드로 넘김
    category: category, // 맛집 카테고리(한식, 일식...)
    filter: filter // 보여지는 순서(평점순, 리뷰순, 이름순)
  }

  const loadData = async () => {
    try {
      const res = await axios.post('http://localhost:9070/restaurant', restaurantInfo);

      setRestaurantData(res.data);
    } catch (err) {
      console.log(err.response.data.error);
    }
  };

  useEffect(() => {
    loadData();
  }, [restaurantInfo]);

  return (
    <>
      <ul id='comp-restaurant'>
        {
          restaurantData.map(item => (
            <li key={item.rt_no}>
              <Link to={`/review/restaurant/detail/${item.rt_no}`}>
                <div className="img-box">
                  <img src={`http://localhost:9070/uploads/review/${item.rt_img}`} alt={`${item.rt_name}`} />
                </div>
                <div className="txt-box">
                  <h4 className="tit">{item.rt_name}</h4>
                  <p><span className='rank'>{item.rt_rank} ({item.rt_review})</span> · <span className='location'>{item.rt_location}</span></p>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default CpRestaurant;