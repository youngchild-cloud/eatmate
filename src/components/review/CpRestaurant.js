import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './CpRestaurant.scss'

const CpRestaurant = ({ category, filter, mypageUser, searchKeyword }) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const restaurantInfo = { // props로 받은 값을 백엔드로 넘김
    category: category, // 맛집 카테고리(한식, 일식...)
    filter: filter, // 보여지는 순서(평점순, 리뷰순, 이름순)
    mypage_user: mypageUser, // 마이페이지 유저 no값
    search_keyword: searchKeyword, // 검색창에 입력한 값
  }

  const loadData = async () => {
    try {
      const res = await axios.post('http://localhost:9070/restaurant', restaurantInfo);

      setRestaurantData(res.data);
    } catch (err) {
      // 백엔드에서 응답이 온 경우(4xx/5xx)
      if (err.response) {
        console.log(err.response.data?.error ?? err.response.statusText);
      }
      // 서버 다운/네트워크/CORS 등으로 응답 자체가 없는 경우
      else if (err.request) {
        console.log('백엔드 서버에 연결할 수 없습니다. (9070)');
      }
      // 그 외
      else {
        console.log(err.message);
      }

      // 화면이 깨지지 않게 안전값
      setRestaurantData([]);
    }
  };

  useEffect(() => {
    loadData();
  }, [category, filter, mypageUser, searchKeyword]);

  return (
    <>
      {/* 결과 없을 때 */}
      {restaurantData.length === 0 && (
        <p className="empty">해당 내용이 없습니다.</p>
      )}

      <ul id='comp-restaurant'>
        {
          restaurantData.map(item => (
            <li key={item.rt_no}>
              <Link to={`/review/restaurant/detail/${item.rt_no}`}>
                <div className="img-box">
                  <img src={`http://localhost:9070/uploads/restaurant/${item.rt_img}`} alt={`${item.rt_name}`} />
                </div>
                <div className="txt-box">
                  <h3 className="tit">{item.rt_name}</h3>
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