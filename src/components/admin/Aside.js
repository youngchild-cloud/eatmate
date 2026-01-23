import { NavLink } from 'react-router-dom';
import './Aside.scss';
import AdminAsideJson from 'data/admin_aside.json';

const Aside = ({ navName }) => {
  return (
    <aside className='admin-aside'>
      <h2>{AdminAsideJson[navName]?.title}</h2>
      <ul>
        {
          AdminAsideJson[navName]?.menu.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end
                title={`${item.title} 페이지로 이동`}
                className={({ isActive }) => (isActive ? 'act' : '')}
              >
                {item.title}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </aside>
  );
};

export default Aside;
