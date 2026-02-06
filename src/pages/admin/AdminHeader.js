import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import Logo from 'assets/images/logo.png';

function AdminHeader() {
  const [adminToken, setAdminToken] = useState(() => localStorage.getItem('adminToken') || '');
  const [adminInfo, setAdminInfo] = useState(null);
  const [handleLogout, setHandleLogout] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken') || '';
    setAdminToken(token);

    if (!token) {
      setAdminInfo(null);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setAdminInfo(decoded);
    } catch (e) {
      console.error('JWT 디코딩 실패:', e);
      setAdminInfo(null);
      setAdminToken('');
      localStorage.removeItem('adminToken'); // 깨진 토큰이면 정리
    }
  }, [location.pathname]);

  const onLogout = (e) => {
    e.stopPropagation();

    localStorage.removeItem('adminToken');
    setAdminToken('');
    setAdminInfo(null);
    setHandleLogout(false);

    alert('로그아웃 되었습니다. 로그인 페이지로 이동합니다.')
    navigate('/admin/login');
  };

  return (
    <section className='admin-header'>
      <div className='admin-header-inner'>
        <h1>
          <Link to='/admin' title='관리자 메인 페이지로 이동'>
            <img src={Logo} alt='' />
          </Link>
        </h1>

        <div className='admin-menu'>
          <ul>
            <li><NavLink to='/admin/restaurant' className={({ isActive }) => (isActive ? 'act' : '')}>맛집 관리</NavLink></li>
            <li><NavLink to='/admin/board' className={({ isActive }) => (isActive ? 'act' : '')}>게시판 관리</NavLink></li>
            <li><NavLink to='/admin/user' className={({ isActive }) => (isActive ? 'act' : '')}>회원 관리</NavLink></li>
          </ul>
        </div>

        {adminToken && adminInfo && (
          <div className='admin-info'>
            <img src={`http://localhost:9070/uploads/admin-user/${adminInfo.token_profile}`} alt='' />
            <p
              onClick={() => setHandleLogout(prev => !prev)}
              className={handleLogout ? 'up' : 'down'}
            >
              {`${adminInfo.token_name}(${adminInfo.token_id})`}님<span></span>

              {handleLogout && (
                <button className='admin-logout-btn' onClick={onLogout}>
                  로그아웃
                </button>
              )}
            </p>

            &#10072;
            <Link to='/review' title='EatMate 메인 페이지로 이동'>EatMate 바로가기</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default AdminHeader;
