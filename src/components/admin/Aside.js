import { NavLink } from 'react-router-dom';
import './Aside.scss';

const Aside = () => {
  return (
    <aside className='admin-aside'>
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
  );
};

export default Aside;