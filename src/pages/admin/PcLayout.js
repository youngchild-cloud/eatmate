import { Routes, Route, Navigate } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminLogin from './Login';

function AppLayout() {
  return (
    <>
      <AdminHeader />

      <main>
        <AdminLogin />
      </main>

      <AdminFooter />
    </>
  );
}

export default AppLayout;
