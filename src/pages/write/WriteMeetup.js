import React from 'react';

import TitleCenter from 'components/common/TitleCenter';
import Input from 'components/common/Input';
import InputFile from 'components/common/InputFile';
import InputTextarea from 'components/common/InputTextarea';
import ButtonWide from 'components/common/ButtonWide';

const WriteMeetup = () => {
  return (
    <section className='write-meetup'>
      <div className="inner">
        <TitleCenter title={'맛집 탐방 글쓰기'} />

        <form className='write-form'>
          <Input type={'text'} name={'m_name'} title={'맛집명'} />

          <InputFile name={'m_file'} title={'사진'} />

          <Input type={'text'} name={'m_title'} title={'제목'} />

          <InputTextarea name={'m_text'} title={'내용'} />

          <Input type={'date'} name={'m_date'} title={'날짜'} />

          <Input type={'number'} name={'m_date'} title={'날짜'} />

          <ButtonWide type={'submit'} text={'등록하기'} />
        </form>
      </div>
    </section>
  );
};

export default WriteMeetup;