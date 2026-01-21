import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from '../src/components/common/ScrollTop';
import AppLayout from '../src/pages/admin/AppLayout';

function App(props) {
  return (
    <BrowserRouter>
      <ScrollTop />
      
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;