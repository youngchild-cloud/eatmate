import { Routes, Route, Navigate } from 'react-router-dom';

import PcLayout from 'layouts/PcLayout';
import MoLayout from 'layouts/MoLayout';

import AdminLogin from 'pages/admin/Login';
import AdminRestaurantList from 'pages/admin/restaurant/RestaurantList';
import AdminRestaurantCreate from 'pages/admin/restaurant/RestaurantCreate';
import AdminReviewList from 'pages/admin/review/ReviewList';
import AdminReviewModify from 'pages/admin/review/ReviewModify';
import AdminMeetupList from 'pages/admin/meetup/MeetupList';
import AdminMeetupModify from 'pages/admin/meetup/MeetupModify';
import AdminCommunityList from 'pages/admin/community/CommunityList';
import AdminCommunityModify from 'pages/admin/community/CommunityModify';
import AdminUserList from 'pages/admin/user/UserList';
import AdminUserCreate from 'pages/admin/user/UserCreate';

import ReviewList from 'pages/review/ReviewList';
import ReviewDetail from 'pages/review/ReviewDetail';
import RestaurantList from 'pages/review/RestaurantList';
import RestaurantDetail from 'pages/review/RestaurantDetail';
import MeetupList from 'pages/meetup/MeetupList';
import MeetupDetail from 'pages/meetup/MeetupDetail';
import CommunityList from 'pages/community/CommunityList';
import CommunityDetail from 'pages/community/CommunityDetail';
import WriteReview from 'pages/write/WriteReview';
import WriteMeetup from 'pages/write/WriteMeetup';
import WriteCommunity from 'pages/write/WriteCommunity';
import Mypage from 'pages/mypage/Mypage';
import MypageProfile from 'pages/mypage/MypageProfile';
import MypageBookmark from 'pages/mypage/MypageBookmark';
import MypageMeetup from 'pages/mypage/MypageMeetup';
import MypageWrite from 'pages/mypage/MypageWrite';
import MypageLike from 'pages/mypage/MypageLike';
import MypageComment from 'pages/mypage/MypageComment';
import Login from 'pages/login/Login';
import Join from 'pages/login/Join';
import NotFound from 'pages/not-found/NotFound';
import PcNotFound from 'pages/admin/not-found/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Admin (PC) */}
      <Route path="/admin" element={<PcLayout />}>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<AdminLogin />} />
        <Route path="restaurant" element={<AdminRestaurantList />} />
        <Route path="restaurant/create" element={<AdminRestaurantCreate />} />
        <Route path="board" element={<Navigate to="review" replace />} />
        <Route path="board/review" element={<AdminReviewList />} />
        <Route path="board/review/modify" element={<AdminReviewModify />} />
        <Route path="board/meetup" element={<AdminMeetupList />} />
        <Route path="board/meetup/modify" element={<AdminMeetupModify />} />
        <Route path="board/community" element={<AdminCommunityList />} />
        <Route path="board/community/modify" element={<AdminCommunityModify />} />
        <Route path="user" element={<AdminUserList />} />
        <Route path="user/create" element={<AdminUserCreate />} />
        <Route path="*" element={<PcNotFound />} />
      </Route>

      {/* Mobile */}
      <Route path="/" element={<MoLayout />}>
        <Route index element={<Navigate to="review" replace />} />
        <Route path="review" element={<ReviewList />} />
        <Route path="review/detail/:br_no" element={<ReviewDetail />} />
        <Route path="review/restaurant/:cate" element={<RestaurantList />} />
        <Route path="review/restaurant/detail/:rt_no" element={<RestaurantDetail />} />

        <Route path="meetup" element={<MeetupList />} />
        <Route path="meetup/detail/:bm_no" element={<MeetupDetail />} />

        <Route path="community" element={<CommunityList />} />
        <Route path="community/detail/:bc_no" element={<CommunityDetail />} />

        <Route path="write/review" element={<WriteReview />} />
        <Route path="write/meetup" element={<WriteMeetup />} />
        <Route path="write/community" element={<WriteCommunity />} />

        <Route path="mypage" element={<Mypage />} />
        <Route path="mypage/profile/:user_no" element={<MypageProfile />} />
        <Route path="mypage/bookmark/:user_no" element={<MypageBookmark />} />
        <Route path="mypage/meetup/:user_no" element={<MypageMeetup />} />
        <Route path="mypage/write/:user_no" element={<MypageWrite />} />
        <Route path="mypage/like/:user_no" element={<MypageLike />} />
        <Route path="mypage/comment/:user_no" element={<MypageComment />} />

        <Route path="login" element={<Login />} />
        <Route path="join" element={<Join />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
