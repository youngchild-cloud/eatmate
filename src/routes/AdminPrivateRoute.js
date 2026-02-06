// AdminPrivateRoute.js
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AdminPrivateRoute = () => {
  const token = localStorage.getItem('adminToken');
  const location = useLocation();

  if (!token) {
    return (
      <Navigate
        to="/admin/login"
        replace
        state={{
          message: '로그인 후 이용 가능합니다.',
          from: location.pathname, // 원래 가려던 페이지
        }}
      />
    );
  }

  return <Outlet />;
};

export default AdminPrivateRoute;
