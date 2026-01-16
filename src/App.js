import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './assets/scss/_reset.scss';
import './assets/scss/base.scss';
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import ReviewList from './pages/review/ReviewList'
import ReviewDetail from './pages/review/ReviewDetail'
import RestaurantList from './pages/review/RestaurantList'
import RestaurantDetail from './pages/review/RestaurantDetail'
import MeetupList from './pages/meetup/MeetupList'
import MeetupDetail from './pages/meetup/MeetupDetail'
import CommunityList from './pages/community/CommunityList';
import CommunityDetail from './pages/community/CommunityDetail';
import WriteReview from './pages/write/WriteReview';
import WriteMeetup from './pages/write/WriteMeetup';
import WriteCommunity from './pages/write/WriteCommunity';
import Mypage from './pages/mypage/Mypage';
import MypageProfile from './pages/mypage/MypageProfile';
import MypageBookmark from './pages/mypage/MypageBookmark';
import MypageMeetup from './pages/mypage/MypageMeetup';
import MypageWrite from './pages/mypage/MypageWrite';
import MypageLike from './pages/mypage/MypageLike';
import MypageComment from './pages/mypage/MypageComment';
import Login from './pages/login/Login';
import Join from './pages/login/Join';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            {/* 메인(맛집 리뷰) */}
            <Route path="/" element={<Navigate to="/review" replace />} /> {/* /으로 들어오면 /review로 강제 이동 */}
            <Route path='/review' element={<ReviewList />} />
            <Route path='/review/detail' element={<ReviewDetail />} />
            <Route path='/review/restaurant' element={<RestaurantList />} />
            <Route path='/review/restaurant/detail' element={<RestaurantDetail />} />

            {/* 서브(맛집 탐방) */}
            <Route path='/meetup' element={<MeetupList />} />
            <Route path='/meetup/detail' element={<MeetupDetail />} />

            {/* 서브(자유게시판) */}
            <Route path='/community' element={<CommunityList />} />
            <Route path='/community/detail' element={<CommunityDetail />} />

            {/* 글쓰기 */}
            <Route path='/write/review' element={<WriteReview />} />
            <Route path='/write/meetup' element={<WriteMeetup />} />
            <Route path='/write/community' element={<WriteCommunity />} />

            {/* 마이페이지 */}
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/mypage/profile' element={<MypageProfile />} />
            <Route path='/mypage/bookmark' element={<MypageBookmark />} />
            <Route path='/mypage/meetup' element={<MypageMeetup />} />
            <Route path='/mypage/write' element={<MypageWrite />} />
            <Route path='/mypage/like' element={<MypageLike />} />
            <Route path='/mypage/comment' element={<MypageComment />} />

            {/* 로그인/회원가입 */}
            <Route path='/login' element={<Login />} />
            <Route path='/join' element={<Join />} />

            {/* not-found 404 */}
            <Route path='/*' element={<NotFound />} />

          </Routes>
        </main>

        <Nav />
      </BrowserRouter>
    </>
  );
}

export default App;
