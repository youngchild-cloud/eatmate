import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import ScrollTop from '../src/components/common/ScrollTop';
import AppLayout from '../src/pages/admin/AppLayout';
import PcLayout from '../src/pages/admin/PcLayout';

function App(props) {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <BrowserRouter>
      <ScrollTop />
      {isAdminPage ? <PcLayout /> : <AppLayout />}
    </BrowserRouter>
  );
}

export default App;