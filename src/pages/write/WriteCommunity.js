import React from 'react';

import TitleCenter from 'components/common/TitleCenter';
import Input from 'components/common/Input';
import InputTextarea from 'components/common/InputTextarea';
import ButtonWide from 'components/common/ButtonWide';

const WriteCommunity = () => {
  return (
    <section className='write-community'>
      <div className="inner">
        <TitleCenter title={'자유게시판 글쓰기'} />

        <form className='write-form'>
          <Input type={'text'} name={'c_title'} title={'제목'} />

          <InputTextarea name={'c_text'} title={'내용'} />

          <ButtonWide type={'submit'} text={'등록하기'} />
        </form>
      </div>
    </section>
  );
};

export default WriteCommunity;