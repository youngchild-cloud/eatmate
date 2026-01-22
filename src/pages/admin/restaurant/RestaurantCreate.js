import React from 'react';
import { Link } from 'react-router-dom';

function RestaurantCreate(props) {
  return (
    <div>
      {/* 좌측 내비 */}
          <aside className='admin-nav'>
            <h2>맛집 관리</h2>
            <ul>
              <li><Link to="/admin/restuarant" title="맛집 목록" >맛집 목록</Link></li>
              <li><Link to="/admin/restuarant/create" title="맛집 등록" >맛집 등록</Link></li>

            </ul>
          </aside>
    </div>
  );
}

export default RestaurantCreate;