import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/scss/_reset.scss';
import './assets/scss/base.scss';
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'









import ReviewList from './pages/reviews/ReviewList'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <main>
          <Routes>






            <Route path='/' element={<ReviewList />} />
          </Routes>
        </main>

        <Nav />
      </BrowserRouter>
    </>
  );
}

export default App;
