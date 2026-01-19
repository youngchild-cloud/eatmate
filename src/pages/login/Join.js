import './Join.scss';

import TitleCenter from '../../components/common/TitleCenter';
import Input from '../../components/common/Input';
import InputTextarea from '../../components/common/InputTextarea';
import ButtonWide from '../../components/common/ButtonWide';

const Join = () => {
  return (
    <section className='join'>
      <div className="inner">
        <TitleCenter title={'회원가입'} />

        <form>
          <div className="id-area">
            <Input type={'text'} name={'j_id'} title={'아이디'} requiredReq={'(필수)'} />
            <button type="button">중복 확인</button>
          </div>
          <Input type={'password'} name={'j_pw'} title={'비밀번호'} requiredReq={'(필수)'} />
          <Input type={'password'} name={'j_pw2'} title={'비밀번호 확인'} requiredReq={'(필수)'} />
          <p className='pw-text'>* 입력하신 비밀번호가 일치합니다.</p>
          <Input type={'text'} name={'j_nick'} title={'닉네임'} requiredReq={'(필수)'} />
          <InputTextarea name={'j_nick'} title={'내 소개글'} requiredSel={'(선택)'} />

          <ButtonWide type={'submit'} text={'가입하기'} />
        </form>
      </div>
    </section>
  );
};

export default Join;