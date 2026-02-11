import { Outlet } from 'react-router-dom';

import Header from 'components/layout/Header';
import Nav from 'components/layout/Nav';
import TopButton from 'components/common/TopButton';

export default function MoLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Nav />

      {/* Top 버튼 */}
      <TopButton />
    </>
  );
}
