import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';


import TitleCenter from 'components/common/TitleCenter';
import ModifyInput from 'components/common/ModifyInput';
import InputFile from 'components/common/InputFile';
import ModifyTextarea from 'components/common/ModifyTextarea';
import ButtonWide from 'components/common/ButtonWide';
import { useRequireLogin } from 'utils/useRequireLogin';

const MeetupModify = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  // const token = localStorage.getItem('token');
  // const decoded = token ? jwtDecode(token) : '';

  const { bm_no } = useParams();
  const [form, setForm] = useState({
    bm_no: '',
    bm_board_cate: '',
    bm_user_no: '',
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

  useEffect(() => {
    axios.get(`http://localhost:9070/meetup/modify/${bm_no}`)
      .then(res => {
        console.log('서버응답값:', res.data);
        const data = res.data;
        setForm({
          ...data,
          bm_m_date: data.bm_m_date?.slice(0, 10)

        });
      })
      .catch(err => console.log('조회오류:', err));
  }, [bm_no])


  const [imgFile, setImgFile] = useState(null);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!imgFile) {
    //   alert('사진을 선택해주세요.');
    //   return;
    // }
    const formData = new FormData();


    // formData.append('bm_date', form.bm_date);
    // formData.append('bm_board_cate', form.bm_board_cate);
    // formData.append('bm_user_no', form.bm_user_no);
    formData.append('bm_title', form.bm_title);
    formData.append('bm_desc', form.bm_desc);
    formData.append('bm_m_date', form.bm_m_date);
    formData.append('bm_m_res', form.bm_m_res);
    // formData.append('bm_m_people', form.bm_m_people);
    formData.append('bm_m_people_all', form.bm_m_people_all);
    // formData.append('bm_heart', form.bm_heart);
    // formData.append('bm_comment', form.bm_comment);
    // formData.append('bm_date', form.bm_date);

    if (imgFile) formData.append('bm_img', imgFile); // key 이름 중요(백엔드와 동일)

    axios.put(`http://localhost:9070/meetup/update/${bm_no}`, formData, {
      headers: { 'Conernt-Type': 'multipart/form-data' }
      // bm_title: form.bm_title,
      // bm_desc: form.bm_desc,
      // bm_m_date: form.bm_m_date,
      // bm_m_res: form.bm_m_res,
      // bm_m_people_all: form.bm_m_people_all
    })
      .then(() => {
        alert('게시글이 수정되었습니다.');
        navigate('/meetup');
      })
      .catch((err) => {
        console.log(err);
        alert('수정실패');
      })
  }


  return (
    <section className='write-meetup' >
      <div className="inner">
        <TitleCenter title={'맛집 탐방 수정하기'} />

        <form className='write-form' onSubmit={handleSubmit}>
          <ModifyInput type={'text'} name={'bm_m_res'} onChange={handleChange} value={form.bm_m_res} title={'맛집명'} />

          <InputFile
            name="bm_img"
            title="사진"
            // maxFiles={5}
            onFilesChange={(files) => setImgFile(files[0] || null)}
          />

          <ModifyInput type={'text'} name={'bm_title'} title={'제목'} onChange={handleChange} value={form.bm_title} />

          <ModifyTextarea name={'bm_desc'} title={'내용'} onChange={handleChange} value={form.bm_desc} />

          <ModifyInput type={'date'} name={'bm_m_date'} title={'날짜'} onChange={handleChange} value={form.bm_m_date} />

          <ModifyInput type={'number'} name={'bm_m_people_all'} title={'참석인원'} onChange={handleChange} value={form.bm_m_people_all} />

          <ButtonWide type={'submit'} text={'등록하기'} />
        </form>
      </div>
    </section >
  );
};

export default MeetupModify;