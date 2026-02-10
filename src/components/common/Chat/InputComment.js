import React, { useState } from 'react';
import './InputComment.scss';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function InputComment({ p_board_cate, p_board_no }) {
  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : '';

  const [form, setForm] = useState({
    ct_user_no: decoded.token_no,
    ct_board_cate: p_board_cate,
    ct_board_no: p_board_no,
    ct_desc: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert('로그인 후 사용 가능합니다. 로그인 페이지로 이동합니다.');
      navigate('/login');
    }

    if (form.ct_desc === '') {
      alert('댓글 내용을 입력하세요.');
      return;
    }

    try {
      await axios.post('http://localhost:9070/comment', form);

      alert('댓글이 등록되었습니다.');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='comm-input'>
      <div className="input-img">
        {
          decoded.token_profile
            ?
            <img src={`http://localhost:9070/uploads/user/${decoded.token_profile}`} alt={`${decoded.token_nick} 프로필`} />
            :
            <img src={`http://localhost:9070/uploads/user/default-user.jpg`} alt='기본 프로필' />
        }
      </div>

      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='댓글을 입력하세요'
          name="ct_desc"
          id="ct_desc"
          maxLength={255}
          value={form.ct_desc}
          onChange={handleChange}
        />
        <button type="submit">입력</button>
      </form>
    </div>
  );
}

export default InputComment;