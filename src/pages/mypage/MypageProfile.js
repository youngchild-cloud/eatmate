import './MypageProfile.scss';

import TitleCenter from '../../components/common/TitleCenter';
import Input from '../../components/common/Input';
import InputTextarea from '../../components/common/InputTextarea';
import ButtonWide from '../../components/common/ButtonWide';

const MypageProfile = () => {
  return (
    <section className='mypage-profile'>
      <div className="inner">
        <TitleCenter title={'프로필 수정'} />

        <form>
          <Input type={'text'} name={'j_id'} title={'아이디'} requiredReq={'(필수)'} readonly={true} />
          <Input type={'password'} name={'j_pw'} title={'비밀번호'} requiredReq={'(필수)'} />
          <Input type={'password'} name={'j_pw2'} title={'비밀번호 확인'} requiredReq={'(필수)'} />
          <p className='pw-text'>* 입력하신 비밀번호가 일치합니다.</p>
          <Input type={'text'} name={'j_nick'} title={'닉네임'} requiredReq={'(필수)'} />
          <InputTextarea name={'j_nick'} title={'내 소개글'} requiredSel={'(선택)'} />

          <ButtonWide type={'submit'} text={'수정 완료'} />
        </form>
      </div>
    </section>
  );
};

export default MypageProfile;