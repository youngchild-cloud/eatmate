import React, { useEffect, useState } from 'react';
import Comment from './Chat/Comment';
import InputComment from './Chat/InputComment';
import axios from 'axios';

function Chat({ id }) {
  const [data, setDate] = useState([]);

  // [자유게시판] key(id)를 이용해서 [고유게시판 댓글 테이블] key를 뽑음'
  useEffect(() => {
    axios.get(`http://localhost:9070/${id}`)
      .then(res => setDate(res.data))
      .catch(err => console.log('에러'))
  }, [])

  return (
    <article>
      <InputComment image={'user01.png'} />
      <ul className='comm-comment'>

        {
          data.map(item => (
            <Comment profil={item.profile} nick={item.nick} txt={item.txt} time={item.time} />
          ))
        }
      </ul>
    </article>
  );
}

export default Chat;