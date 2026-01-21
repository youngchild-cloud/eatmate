import { Routes, Route } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';
import AdminLogin from './Login';
import AdminRestaurantList from './restaurant/RestaurantList';
import AdminRestaurantCreate from './restaurant/RestaurantCreate';

function AppLayout() {
  return (
    <>
      <AdminHeader />

      <main>
        <Routes>
          <Route path='login' element={<AdminLogin />} />
          <Route path='restaurant' element={<AdminRestaurantList />} />
          <Route path='restaurant/create' element={<AdminRestaurantCreate />} />
        </Routes>
      </main>

      <AdminFooter />
    </>
  );
}

export default AppLayout;
