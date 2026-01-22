import React from 'react';

import TitleCenter from 'components/common/TitleCenter';
import Input from 'components/common/Input';
import InputFile from 'components/common/InputFile';
import InputTextarea from 'components/common/InputTextarea';
import ButtonWide from 'components/common/ButtonWide';

const WriteReview = () => {
  return (
    <section className='write-review'>
      <div className="inner">
        <TitleCenter title={'맛집 리뷰 글쓰기'} />

        <form className='write-form'>
          <Input type={'text'} name={'r_name'} title={'맛집명'} />

          <InputFile name={'r_file'} title={'사진'} />

          <InputTextarea name={'r_text'} title={'리뷰'} />

          <div className='common-input-box'>
            <label htmlFor="r_sel">평점</label>
            <select name="r_sel" id="r_sel">
              <option value="">평점을 선택해 주세요</option>
              <option value="rank5">5점</option>
              <option value="rank4">4점</option>
              <option value="rank3">3점</option>
              <option value="rank2">2점</option>
              <option value="rank1">1점</option>
            </select>
          </div>

          <ButtonWide type={'submit'} text={'등록하기'} />
        </form>
      </div>
    </section>
  );
};

export default WriteReview;