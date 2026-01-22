import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollTop from 'components/common/ScrollTop';
import PcLayout from 'pages/admin/PcLayout';
import MoLayout from 'pages/admin/MoLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path='/admin/*' element={<PcLayout />} />
          <Route path='/*' element={<MoLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;