import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import TitleCenter from 'components/common/TitleCenter';
import Input from 'components/common/Input';
import InputTextarea from 'components/common/InputTextarea';
import ButtonWide from 'components/common/ButtonWide';
import { useRequireLogin } from 'utils/useRequireLogin';
import { jwtDecode } from 'jwt-decode';

const WriteCommunity = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : '';

  const [form, setForm] = useState({
    bc_user_no: decoded.token_no,
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
          <Input type={'text'} name={'bc_title'} title={'제목'} onChange={handleChange} value={form.bc_title} />

          <InputTextarea name={'bc_desc'} title={'내용'} onChange={handleChange} value={form.bc_desc} />

          <ButtonWide type={'submit'} text={'등록하기'} />
        </form>
      </div>
    </section>
  );
};

export default WriteCommunity;