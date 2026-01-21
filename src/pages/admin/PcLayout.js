import { Routes, Route, Navigate } from 'react-router-dom';

import '../../assets/scss/_reset.scss';
import './adminlayout.scss';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminLogin from './Login';

function AppLayout() {
  return (
    <>
      <AdminHeader />

      <main className='pc-main'>
        <AdminLogin />
      </main>

      <AdminFooter />
    </>
  );
}

export default AppLayout;
