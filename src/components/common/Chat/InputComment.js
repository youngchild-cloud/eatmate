import React, { useState } from 'react';
import './InputComment.scss';

function InputComment({ image }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
  }


  return (
    <div className='comm-input'>
      <div className="input-img">
        <img src={`${process.env.PUBLIC_URL}/images/user/${image}`} alt="기본프로필" />
      </div>
      <form className="input-form" onSubmit={handleSubmit}>
        <input type="text" placeholder='댓글을 입력하세요' name="comment" id="comment" maxLength={500}
          value={text} onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">입력</button>
      </form>
    </div>
  );
}

export default InputComment;