import { Routes, Route, Navigate } from 'react-router-dom';

import PcLayout from 'layouts/PcLayout';
import MoLayout from 'layouts/MoLayout';

import AdminLogin from 'pages/admin/Login';
import AdminRestaurantList from 'pages/admin/restaurant/RestaurantList';
import AdminRestaurantCreate from 'pages/admin/restaurant/RestaurantCreate';
import AdminReviewList from 'pages/admin/review/ReviewList';
import AdminReviewCreate from 'pages/admin/review/ReviewCreate';
import AdminMeetupList from 'pages/admin/meetup/MeetupList';
import AdminMeetupCreate from 'pages/admin/meetup/MeetupCreate';
import AdminCommunityList from 'pages/admin/community/CommunityList';
import AdminCommunityCreate from 'pages/admin/community/CommunityCreate';
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
        <Route path="board/review/create" element={<AdminReviewCreate />} />
        <Route path="board/meetup" element={<AdminMeetupList />} />
        <Route path="board/meetup/create" element={<AdminMeetupCreate />} />
        <Route path="board/community" element={<AdminCommunityList />} />
        <Route path="board/community/create" element={<AdminCommunityCreate />} />
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
        <Route path="mypage/profile" element={<MypageProfile />} />
        <Route path="mypage/bookmark" element={<MypageBookmark />} />
        <Route path="mypage/meetup" element={<MypageMeetup />} />
        <Route path="mypage/write" element={<MypageWrite />} />
        <Route path="mypage/like" element={<MypageLike />} />
        <Route path="mypage/comment" element={<MypageComment />} />

        <Route path="login" element={<Login />} />
        <Route path="join" element={<Join />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
