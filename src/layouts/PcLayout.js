import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import AdminHeader from 'pages/admin/AdminHeader';
import AdminFooter from 'pages/admin/AdminFooter';

export default function PcLayout() {
  useEffect(() => {
    document.body.classList.add('body-pc');
    return () => document.body.classList.remove('body-pc');
  }, []);

  return (
    <>
      <AdminHeader />
      <main>
        <Outlet />
      </main>
      <AdminFooter />
    </>
  );
}
