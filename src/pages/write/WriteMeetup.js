import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import TitleCenter from 'components/common/TitleCenter';
import Input from 'components/common/Input';
import InputFile from 'components/common/InputFile';
import InputTextarea from 'components/common/InputTextarea';
import ButtonWide from 'components/common/ButtonWide';
import { useRequireLogin } from 'utils/useRequireLogin';

const WriteMeetup = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  const [form, setForm] = useState({
    bm_board_cate: '',
    bm_user_no: '',
    bm_img: '',
    bm_img2: '',
    bm_img3: '',
    bm_img4: '',
    bm_img5: '',
    bm_title: '',
    bm_desc: '',
    bm_m_date: '',
    bm_m_res: '',
    bm_m_people: '',
    bm_m_people_all: '',
    bm_heart: '',
    bm_comment: '',
    bm_date: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9070/meetup', form)
      .then(() => {
        alert('게시글이 등록되었습니다.');
        navigate('/meetup');
      })
      .catch((err) => {
        console.log(err);
        alert('필수항목을 입력해주세요.');
      })
  }

  return (
    <section className='write-meetup'>
      <div className="inner">
        <TitleCenter title={'맛집 탐방 글쓰기'} />

        <form className='write-form' onSubmit={handleSubmit}>
          <Input type={'text'} name={'bm_m_res'} title={'맛집명'} onChange={handleChange} value={form.bm_m_res} />

          <InputFile
            name="m_file"
            title="사진"
            requiredSel="(선택)"
            onChange={handleChange}
            maxFiles={5}
          />

          <Input type={'text'} name={'bm_title'} title={'제목'} onChange={handleChange} value={form.bm_title} />

          <InputTextarea name={'bm_desc'} title={'내용'} onChange={handleChange} value={form.bm_desc} />

          <Input type={'date'} name={'bm_m_date'} title={'날짜'} onChange={handleChange} value={form.bm_m_date} />

          <Input type={'number'} name={'bm_m_people_all'} title={'참석인원'} onChange={handleChange} value={form.bm_m_people_all} />

          <ButtonWide type={'submit'} text={'등록하기'} />
        </form>
      </div>
    </section>
  );
};

export default WriteMeetup;