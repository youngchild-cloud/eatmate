// App.js
import { BrowserRouter } from 'react-router-dom';
import ScrollTop from 'components/common/ScrollTop';

import 'assets/scss/_reset.scss';
import 'assets/scss/base.scss';
import 'assets/scss/adminlayout.scss';
import 'assets/scss/admin.scss';

import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <AppRoutes />
    </BrowserRouter>
  );
}
