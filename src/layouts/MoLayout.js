import { Outlet } from 'react-router-dom';

import Header from 'components/layout/Header';
import Nav from 'components/layout/Nav';

export default function MoLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Nav />
    </>
  );
}
