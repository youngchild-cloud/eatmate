import React from 'react';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';

function Login(props) {
  return (

    <section className='admin-login'>
      <AdminHeader />
      <AdminFooter />
      <div className='inner'>
        <h2>로그인</h2>
        <form>
          <p>
            <label htmlFor="id">아이디</label>
            
          </p>
        </form>

      </div>
    </section>
  );
}

export default Login;