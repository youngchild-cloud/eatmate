import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import '../../assets/scss/_reset.scss';
import '../../assets/scss/base.scss';
import Header from '../../components/layout/Header';
import Nav from '../../components/layout/Nav';

import ReviewList from '../review/ReviewList'
import ReviewDetail from '../review/ReviewDetail'
import RestaurantList from '../review/RestaurantList'
import RestaurantDetail from '../review/RestaurantDetail'
import MeetupList from '../meetup/MeetupList'
import MeetupDetail from '../meetup/MeetupDetail'
import CommunityList from '../community/CommunityList';
import CommunityDetail from '../community/CommunityDetail';
import WriteReview from '../write/WriteReview';
import WriteMeetup from '../write/WriteMeetup';
import WriteCommunity from '../write/WriteCommunity';
import Mypage from '../mypage/Mypage';
import MypageProfile from '../mypage/MypageProfile';
import MypageBookmark from '../mypage/MypageBookmark';
import MypageMeetup from '../mypage/MypageMeetup';
import MypageWrite from '../mypage/MypageWrite';
import MypageLike from '../mypage/MypageLike';
import MypageComment from '../mypage/MypageComment';
import Login from '../login/Login';
import Join from '../login/Join';
import NotFound from '../not-found/NotFound';
import AdminLogin from './Login';

function AppLayout() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPage && <Header />}

      <main>
        <Routes>
          {/* 메인 */}
          <Route path="/" element={<Navigate to="/review" replace />} />
          <Route path="/review" element={<ReviewList />} />
          <Route path="/review/detail" element={<ReviewDetail />} />
          <Route path="/review/restaurant" element={<RestaurantList />} />
          <Route path="/review/restaurant/detail" element={<RestaurantDetail />} />

          {/* 서브 */}
          <Route path="/meetup" element={<MeetupList />} />
          <Route path="/meetup/detail" element={<MeetupDetail />} />

          <Route path="/community" element={<CommunityList />} />
          <Route path="/community/detail" element={<CommunityDetail />} />

          {/* 글쓰기 */}
          <Route path="/write/review" element={<WriteReview />} />
          <Route path="/write/meetup" element={<WriteMeetup />} />
          <Route path="/write/community" element={<WriteCommunity />} />

          {/* 마이페이지 */}
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/profile" element={<MypageProfile />} />
          <Route path="/mypage/bookmark" element={<MypageBookmark />} />
          <Route path="/mypage/meetup" element={<MypageMeetup />} />
          <Route path="/mypage/write" element={<MypageWrite />} />
          <Route path="/mypage/like" element={<MypageLike />} />
          <Route path="/mypage/comment" element={<MypageComment />} />

          {/* 로그인 */}
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />

          {/* 관리자 */}
          <Route path="/admin" element={<AdminLogin />} />

          {/* 404 */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>

      {!isAdminPage && <Nav />}
    </>
  );
}

export default AppLayout;
