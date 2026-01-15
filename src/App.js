import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/scss/_reset.scss';
import './assets/scss/base.scss';
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import RestaurantList from './pages/reviews/RestaurantList'
import MeetupList from './pages/meetups/MeetupList'
import CommunityList from './pages/community/CommunityList';
import CommunityDetail from './pages/community/CommunityDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<RestaurantList />} />
          <Route path='/meetup' element={<MeetupList />} />
          <Route path='/community' element={<CommunityList />} />
          <Route path='/community/detail' element={<CommunityDetail />} />
        </Routes>

        <Nav />
      </BrowserRouter>
    </>
  );
}

export default App;
