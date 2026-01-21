import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './restaurantlist.scss';

function RestaurantList(props) {
  document.querySelector('body').classList.add("admin")
  return (
    <>

      <section className='admin-restaurantlist'>
        <article className="pc-inner">
          {/* 좌측 내비 */}
          <div className='admin-nav'>
            <h2>맛집 관리</h2>
            <ul>
              <li><Link to="" title="맛집 목록" >맛집 목록</Link></li>
              <li><Link to="" title="맛집 등록" >맛집 등록</Link></li>
            </ul>
          </div>
          {/* 우측 리스트 */}
          <div className='admin-list'>
            <div className='list-top'>
              <h3>맛집 목록</h3>
              <Link to="" title="맛집 등록" >맛집 등록</Link>
            </div>

            <table>
              <caption>맛집목록</caption>
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