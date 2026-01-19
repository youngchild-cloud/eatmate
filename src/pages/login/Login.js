import './Login.scss';

import { Link } from 'react-router-dom';

import TitleCenter from '../../components/common/TitleCenter';
import Input from '../../components/common/Input';
import ButtonWide from '../../components/common/ButtonWide';

const Login = () => {
  return (
    <section className='login'>
      <div className="inner">
        <TitleCenter title={'로그인'} />

        <form>
          <Input type={'text'} name={'l_id'} title={'아이디'} />
          <Input type={'password'} name={'l_pw'} title={'비밀번호'} />
          <div className="search-box">
            <input type="checkbox" name="l_chk" id="l_chk" />
            <label htmlFor="l_chk">아이디 저장</label>
          </div>
          <ul className="links">
            <li>
              <Link onClick={() => alert('준비중인 페이지입니다.')}>아이디/비밀번호 찾기</Link>
            </li>
            <li>
              <Link to={'/join'}>회원가입</Link>
            </li>
          </ul>

          <ButtonWide type={'submit'} text={'로그인'} />
        </form>
      </div>
    </section>
  );
};

export default Login;