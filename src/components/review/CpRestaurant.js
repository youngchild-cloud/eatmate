import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import './CpRestaurant.scss'

const CpRestaurant = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const { cate } = useParams();
  const cateMap = {
    cate1: '한식',
    cate2: '일식',
    cate3: '중식',
    cate4: '양식',
    cate5: '분식',
    cate6: '카페',
    cate7: '디저트',
    cate8: '기타',
  };
  const category = cateMap[cate];

  const loadData = async () => {
    try {
      const res = await axios.post(
        'http://localhost:9070/restaurant',
        { cate: category }
      );

      setRestaurantData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (category) {
      loadData();
    }
  }, [category]);

  return (
    <>
      <ul id='comp-restaurant'>
        {
          restaurantData.map(item => (
            <li key={item.rt_no}>
              <Link to={`/review/restaurant/detail/${item.rt_no}`}>
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/review/${item.rt_img}`} alt={`${item.rt_name}`} />
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