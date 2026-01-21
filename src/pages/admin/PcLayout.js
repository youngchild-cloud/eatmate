import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminLogin from './Login';

function AppLayout() {
  return (
    <>
      <AdminHeader />

      <main>
        <Routes>
          <Route path='/admin' element={<AdminLogin />} />
        </Routes>

      </main>

      <AdminFooter />


    </>
  );
}

export default AppLayout;
