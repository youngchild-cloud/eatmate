import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
// import api from '../../utils/api';

import TitleCenter from 'components/common/TitleCenter';
import Input from 'components/common/Input';
import InputFile from 'components/common/InputFile';
import InputTextarea from 'components/common/InputTextarea';
import ButtonWide from 'components/common/ButtonWide';
import { useRequireLogin } from 'utils/useRequireLogin';

const WriteMeetup = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  //토큰만료확인후 삭제
  if (token) {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  }
  const decoded = token ? jwtDecode(token) : '';
  const today = new Date().toISOString().split('T')[0];

  const [form, setForm] = useState({
    bm_board_cate: '',
    bm_user_no: decoded.token_no,
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
  const [imgFile, setImgFile] = useState(null);


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imgFile) {
      alert('사진을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('bm_board_cate', form.bm_board_cate);
    formData.append('bm_user_no', form.bm_user_no);
    formData.append('bm_title', form.bm_title);
    formData.append('bm_desc', form.bm_desc);
    formData.append('bm_m_date', form.bm_m_date);
    formData.append('bm_m_res', form.bm_m_res);
    formData.append('bm_m_people', form.bm_m_people);
    formData.append('bm_m_people_all', form.bm_m_people_all);
    formData.append('bm_heart', form.bm_heart);
    formData.append('bm_comment', form.bm_comment);
    formData.append('bm_date', form.bm_date);

    if (imgFile) formData.append('bm_img', imgFile); // key 이름 중요(백엔드와 동일)

    axios.post('http://localhost:9070/meetup', formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    )
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
    <section className='write-meetup' >
      <div className="inner">
        <TitleCenter title={'맛집 탐방 글쓰기'} />

        <form className='write-form' onSubmit={handleSubmit}>
          <Input type={'text'} name={'bm_m_res'} title={'맛집명'} onChange={handleChange} value={form.bm_m_res} />

          <InputFile
            name="bm_img"
            title="사진"
            // maxFiles={5}
            onFilesChange={(files) => setImgFile(files[0] || null)}
          />

          <Input type={'text'} name={'bm_title'} title={'제목'} onChange={handleChange} value={form.bm_title} />

          <InputTextarea name={'bm_desc'} title={'내용'} onChange={handleChange} value={form.bm_desc} />

          <Input type={'date'} name={'bm_m_date'} title={'날짜'} onChange={handleChange} value={form.bm_m_date} min={today} />

          <Input type={'number'} name={'bm_m_people_all'} title={'참석인원'} onChange={handleChange} value={form.bm_m_people_all} />

          <ButtonWide type={'submit'} text={'등록하기'} />
        </form>
      </div>
    </section >
  );
};

export default WriteMeetup;