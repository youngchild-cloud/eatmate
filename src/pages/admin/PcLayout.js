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
import AdminReviewList from './review/ReviewList';
import AdminReviewCreate from './review/ReviewCreate';
import AdminMeetupList from './meetup/MeetupList';
import AdminMeetupCreate from './meetup/MeetupCreate';
import AdminCommunityList from './community/CommunityList';
import AdminCommunityCreate from './community/CommunityCreate';
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
          <Route path='board' element={<Navigate to='review' replace />} />
          <Route path='board/review' element={<AdminReviewList />} />
          <Route path='board/review/create' element={<AdminReviewCreate />} />
          <Route path='board/meetup' element={<AdminMeetupList />} />
          <Route path='board/meetup/create' element={<AdminMeetupCreate />} />
          <Route path='board/community' element={<AdminCommunityList />} />
          <Route path='board/community/create' element={<AdminCommunityCreate />} />
          <Route path='user' element={<AdminUserList />} />
          <Route path='user/create' element={<AdminUserCreate />} />
        </Routes>
      </main>

      <AdminFooter />
    </>
  );
}

export default AppLayout;
