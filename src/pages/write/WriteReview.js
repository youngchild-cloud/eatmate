import React, { useState } from 'react';
import axios from 'axios';

import TitleCenter from 'components/common/TitleCenter';
import Input from 'components/common/Input';
import InputFile from 'components/common/InputFile';
import InputTextarea from 'components/common/InputTextarea';
import ButtonWide from 'components/common/ButtonWide';
import { useRequireLogin } from 'utils/useRequireLogin';

const WriteReview = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  const [reviewInput, setReviewInput] = useState({
    br_user_no: '',
    br_rank: '',
    br_img: '',
    br_desc: '',
    br_rt_no: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setReviewInput(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:9070/wirte/review', reviewInput);

      setReviewInput(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <section className='write-review'>
      <div className="inner">
        <TitleCenter title={'맛집 리뷰 글쓰기'} />

        <form className='write-form' onSubmit={handleSubmit}>
          <Input
            type={'text'}
            name={'br_rt_no'}
            title={'맛집명'}
            value={reviewInput.br_rt_no}
            onChange={handleChange}
          />

          <InputFile
            name="br_img"
            title="사진"
            requiredSel="(선택)"
            onChange={handleChange}
            maxFiles={5}
          />

          <InputTextarea
            name={'br_desc'}
            title={'리뷰'}
            value={reviewInput.br_desc}
            onChange={handleChange}
          />

          <div className='common-input-box'>
            <label htmlFor="br_rank">평점</label>
            <select
              name="br_rank"
              id="br_rank"
              value={reviewInput.br_rank}
              onChange={handleChange}
            >
              <option value="">평점을 선택해 주세요</option>
              <option value="5">5점</option>
              <option value="4">4점</option>
              <option value="3">3점</option>
              <option value="2">2점</option>
              <option value="1">1점</option>
            </select>
          </div>

          <ButtonWide
            type={'submit'}
            text={'등록하기'}
          />
        </form>
      </div>
    </section>
  );
};

export default WriteReview;