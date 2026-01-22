import { Link, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import './restaurantlist.scss';

function RestaurantList(props) {
  useEffect(() => {
    document.body.classList.add('admin');
    return () => {
      document.body.classList.remove('admin');
    };
  }, []);

  return (
    <>
      <section className='admin-restaurantlist'>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <aside className='admin-nav'>
            <h2>맛집 관리</h2>
            <ul>
              <li>
                <NavLink
                  to="/admin/restaurant"
                  end
                  title="맛집 목록 페이지로 이동"
                  className={({ isActive }) => (isActive ? 'act' : '')}
                >
                  맛집 목록
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/restaurant/create"
                  title="맛집 등록 페이지로 이동"
                  className={({ isActive }) => (isActive ? 'act' : '')}
                >
                  맛집 등록
                </NavLink>
              </li>
            </ul>
          </aside>

          {/* 우측 리스트 */}
          <div className='admin-list'>
            <div className='list-top'>
              <h3>맛집 목록</h3>
              <Link to="" title="맛집 등록" >맛집 등록</Link>
            </div>

            <table>
              <caption>맛집목록</caption>
              <colgroup>
                <col style={{ width: "4%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "22%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "25%" }} />
                <col style={{ width: "4%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>번호</th><th>맛집 카테고리</th><th>맛집명</th><th>맛집 설명</th><th>맛집 이미지</th><th>전화번호</th><th>주소</th><th>평점</th>
                </tr>
              </thead>
              <tbody>
                {/* 함수자리 */}
                <tr>
                  <td>1</td>
                  <td>분식</td>
                  <td>엽기떡볶이 종로</td>
                  <td>한국을 대표하는 떡볶이 중에서...</td>
                  <td>맛집 이미지(사진)</td>
                  <td>02-000-0000</td>
                  <td>서울특별시 중구 다산로 265 럭키프라자 1층</td>
                  <td>4.9</td>
                </tr>
              </tbody>
            </table>

          </div>
        </article>
      </section>




    </>
  );
}

export default RestaurantList;