import axios from 'axios';
import Aside from 'components/admin/Aside';
import TitleBox from 'components/admin/TitleBox';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { dateFormat2 } from 'utils/dateFormat2';

function RestaurantList(props) {
  const [data, setData] = useState([]);
  const loadData = async () => {
    try {
      const res = await axios.post('http://localhost:9070/restaurant');

      setData(res.data);
    } catch (err) {
      console.log(err.response.data.error);
    }
  };


  useEffect(() => {
    loadData();
  }, []);

  const deleteData = async (rt_no, rt_name) => {
    if (window.confirm(`${rt_name}을(를) 삭제하시겠습니까?`)) {
      try {
        await axios
          .delete(`http://localhost:9070/admin/restaurant/${rt_no}`);

        alert(`선택하신 ${rt_name}을(를) 삭제했습니다.`);
        loadData();
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <>
      <section className='admin-list admin-restaurantlist'>
        <h2 className='hidden'>맛집 관리</h2>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <Aside navName="restaurant" />

          {/* 우측 리스트 */}
          <div className='admin-list'>
            <TitleBox title="맛집 목록" linkto="/admin/restaurant/create" btnname="맛집 등록" btnshow />

            <table>
              <caption>맛집목록</caption>
              <colgroup>
                <col style={{ width: "4%" }} />
                <col style={{ width: "5%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "16%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "9%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "6%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "10%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>카테고리</th>
                  <th>맛집명</th>
                  <th>맛집 설명</th>
                  <th>맛집 이미지</th>
                  <th>전화번호</th>
                  <th>위치</th>
                  <th>평점/리뷰수</th>
                  <th>등록 날짜/시간</th>
                  <th>수정/삭제</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.rt_no}>
                    <td>{item.rt_no}</td>
                    <td>{item.rt_cate}</td>
                    <td>{item.rt_name}</td>
                    <td>{item.rt_desc}</td>
                    <td className='imgtd'><img src={`http://localhost:9070/uploads/restaurant/${item.rt_img}`} alt="식당 사진" /></td>
                    <td>{item.rt_tel}</td>
                    <td>{item.rt_location}</td>
                    <td>{item.rt_rank} / ({item.rt_review})</td>
                    <td>{dateFormat2(item.rt_date)}</td>
                    <td className='btn-td'>
                      <Link to={`/admin/restaurant/modify/${item.rt_no}`} className='btn-update btn'>수정</Link>
                      <button className='btn-delete btn' onClick={() => deleteData(item.rt_no, item.rt_name)}>삭제</button>
                    </td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </>
  );
}

export default RestaurantList;