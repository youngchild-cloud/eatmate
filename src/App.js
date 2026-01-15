import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/scss/_reset.scss';
import './assets/scss/base.scss';
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import ReviewList from './pages/reviews/ReviewList'
import MeetupList from './pages/meetups/MeetupList'
import CommunityList from './pages/community/CommunityList';
import CommunityDetail from './pages/community/CommunityDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<ReviewList />} />
            <Route path='/meetup' element={<MeetupList />} />
            <Route path='/community' element={<CommunityList />} />
            <Route path='/community/detail' element={<CommunityDetail />} />
          </Routes>
        </main>

        <Nav />
      </BrowserRouter>
    </>
  );
}

export default App;
