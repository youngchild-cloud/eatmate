import React, { useState } from 'react';
import './InputComment.scss';
import { jwtDecode } from 'jwt-decode';

function InputComment({ image }) {
  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : '';
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
  }

  return (
    <div className='comm-input'>
      <div className="input-img">
        {
          decoded.token_profile ?
            <img src={`http://localhost:9070/uploads//user/${decoded.token_profile}`} alt={`${decoded.token_nick} 프로필`} />
            :
            <img src={`http://localhost:9070/uploads//user/user-default.png`} alt="프로필" />
        }
      </div>

      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='댓글을 입력하세요'
          name="comment"
          id="comment"
          maxLength={500}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">입력</button>
      </form>
    </div>
  );
}

export default InputComment;