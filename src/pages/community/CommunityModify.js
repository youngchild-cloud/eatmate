import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import TitleCenter from 'components/common/TitleCenter';
import Input from 'components/common/Input';
import InputTextarea from 'components/common/InputTextarea';
import ButtonWide from 'components/common/ButtonWide';
import { useRequireLogin } from 'utils/useRequireLogin';
import { jwtDecode } from 'jwt-decode';

const CommunityModify = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : '';

  const { bc_no } = useParams();
  const navigate = useNavigate();

  const [bcModify, setBcModify] = useState({
    bc_title: '',
    bc_desc: '',
  })

  // 글 정보 불러오기
  useEffect(() => {
    axios.get(`http://localhost:9070/community/detail/${bc_no}`)
    .then(res =>{
      setBcModify(res.data);
    })
    .catch(err => console.log('조회 오류 : ', err));
  }, [bc_no]);

  // const [form, setForm] = useState({
  //   bc_user_no: decoded.token_no,
  //   bc_title: '', //글제목
  //   bc_desc: '' //글본문
  //   //유저 정보? 입력시간?
  // })

  const handleChange = (e) => {
    setBcModify({
      ...bcModify,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      await axios.put(`http://localhost:9070/community/update/${bc_no}`, {
        bc_title: bcModify.bc_title,
        bc_desc: bcModify.bc_desc,
      })

      alert('게시글이 수정되었습니다.');

      navigate(`/community/detail/${bc_no}`)
    }catch (err) {
      console.log(err)
    }
  }


  return (
    <section className='write-community'>
      <div className="inner">
        <TitleCenter title={'자유게시판 수정하기기'} />

        <form className='write-form' onSubmit={handleSubmit}>
          <Input type={'text'} name={'bc_title'} title={'제목'} onChange={handleChange} value={bcModify.bc_title} />

          <InputTextarea name={'bc_desc'} title={'내용'} onChange={handleChange} value={bcModify.bc_desc} />

          <ButtonWide type={'submit'} text={'등록하기'} />
        </form>
      </div>
    </section>
  );
};

export default CommunityModify;