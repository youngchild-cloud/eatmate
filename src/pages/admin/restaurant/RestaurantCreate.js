import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './restaurantcreate.scss'
import PcInput from '../../../components/common/PcInput';

function RestaurantCreate(props) {
  return (
    <>
      <section className='admin-restaurantcreate'>
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
          <div className='right-content'>
            <div className='list-top'>
              <h3>맛집 등록</h3>
            </div>

            <form>
              <legend>맛집 등록하기</legend>
              <PcInput type="select" name="cate" title="맛집 카테고리"/>
              <PcInput type="input" name="restaurant" title="맛집명"/>
              <PcInput type="input" name="restaurant" title="맛집 설명"/>
              <PcInput type="file" name="image" title="맛집 이미지"/>
              <PcInput type="tel" name="tel" title="전화번호"/>
              <PcInput type="text" name="address" title="주소"/>

            </form>
          </div>


        </article>
      </section>
    </>
  );
}

export default RestaurantCreate;