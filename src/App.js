import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/scss/_reset.scss';
import './assets/scss/base.scss';
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import RestaurantList from './pages/reviews/RestaurantList'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<RestaurantList />} />
        </Routes>

        <Nav />
      </BrowserRouter>
    </>
  );
}

export default App;
