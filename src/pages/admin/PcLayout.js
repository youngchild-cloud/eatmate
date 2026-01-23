import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import 'assets/scss/_reset.scss';
import './adminlayout.scss';
import 'assets/scss/admin.scss';

import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminLogin from './Login';
import AdminRestaurantList from './restaurant/RestaurantList';
import AdminRestaurantCreate from './restaurant/RestaurantCreate';
import AdminUserList from './user/UserList';
import AdminUserCreate from './user/UserCreate';

function AppLayout() {
  useEffect(() => {
    document.body.classList.add('body-pc');
    return () => {
      document.body.classList.remove('body-pc');
    };
  }, []);

  return (
    <>
      <AdminHeader />

      <main>
        <Routes>
          <Route path='' element={<Navigate to='login' replace />} />
          <Route path='login' element={<AdminLogin />} />
          <Route path='restaurant' element={<AdminRestaurantList />} />
          <Route path='restaurant/create' element={<AdminRestaurantCreate />} />
          <Route path='user' element={<AdminUserList />} />
          <Route path='user/create' element={<AdminUserCreate />} />
        </Routes>
      </main>

      <AdminFooter />
    </>
  );
}

export default AppLayout;
