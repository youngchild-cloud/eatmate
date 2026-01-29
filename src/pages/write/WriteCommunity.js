import React, { useState } from 'react';

import TitleCenter from 'components/common/TitleCenter';
import Input from 'components/common/Input';
import InputTextarea from 'components/common/InputTextarea';
import ButtonWide from 'components/common/ButtonWide';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const WriteCommunity = () => {

  const [form, setForm] = useState({
    bc_user_no: 1,
    bc_title: '', //글제목
    bc_desc: '' //글본문
    //유저 정보? 입력시간?
  })
  // 완료후 이동?
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value

    });
    console.log(e.target.name, e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9070/writecommunity', form)
      .then(() => {
        alert('게시글이 등록되었습니다.');
        navigate('/community');
      })
      .catch((err) => {
        console.log(err);
        alert('등록 중 오류가 발생되었습니다.');
      })
  }


  return (
    <section className='write-community'>
      <div className="inner">
        <TitleCenter title={'자유게시판 글쓰기'} />

        <form className='write-form' onSubmit={handleSubmit}>
          <Input type={'text'} name={'bc_title'} title={'제목'} onChange={handleChange} />

          <InputTextarea name={'bc_desc'} title={'내용'} onChange={handleChange} requiredReq={'필수'} />

          <ButtonWide type={'submit'} text={'등록하기'} />
        </form>
      </div>
    </section>
  );
};

export default WriteCommunity;