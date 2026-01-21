import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollTop from '../src/components/common/ScrollTop';
import PcLayout from '../src/pages/admin/PcLayout';
import MoLayout from '../src/pages/admin/MoLayout';

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