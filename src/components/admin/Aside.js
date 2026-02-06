import { NavLink, useLocation } from 'react-router-dom';
import './Aside.scss';
import AdminAsideJson from 'data/admin_aside.json';

const Aside = ({ navName }) => {
  const { pathname } = useLocation();
  const menu = AdminAsideJson[navName]?.menu ?? [];

  // 현재 경로(pathname)를 기준으로 "어떤 메뉴를 active로 볼지" 결정
  // 규칙:
  // 1) pathname이 menu의 to와 정확히 같으면 그걸 active
  // 2) 정확히 같지 않으면, pathname이 to로 시작하는 메뉴 후보 중 "가장 긴(to가 가장 구체적인) 것"을 active
  //    -> /admin/restaurant/create 는 create가,
  //       /admin/restaurant/modify/3 는 /admin/restaurant(목록)이 active 됨
  const activeTo = (() => {
    // 정확히 일치하는 메뉴가 있으면 그걸 우선
    const exact = menu.find(m => m.to === pathname);
    if (exact) return exact.to;

    // startsWith 후보 중 가장 긴 to를 선택
    const candidates = menu
      .filter(m => pathname.startsWith(m.to))
      .sort((a, b) => b.to.length - a.to.length);

    return candidates[0]?.to ?? null;
  })();

  return (
    <aside className='admin-aside'>
      <h2>{AdminAsideJson[navName]?.title}</h2>
      <ul>
        {menu.map(item => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === activeTo} // 선택: exact일 때만 end
              className={() => (item.to === activeTo ? 'act' : '')}
              title={`${item.title} 페이지로 이동`}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
