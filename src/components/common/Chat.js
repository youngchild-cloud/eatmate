import { useEffect, useState } from 'react';
import './Chat.scss';

import Comment from './Chat/Comment';
import InputComment from './Chat/InputComment';
import axios from 'axios';

function Chat({ ct_board_cate, ct_board_no }) {
  // const [data, setData] = useState({
  //   ct_board_cate: ct_board_cate,
  //   ct_board_no: ct_board_no
  // });
  const [data, setData] = useState([]);

  const loadData = () => {
    axios.post('http://localhost:9070/community/detail/chat', data)
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    loadData()
  }, [ct_board_no])

  return (
    <article className='common-chat'>
      <InputComment image={'user01.png'} />
      <ul className='comm-comment'>
        {
          data.map(item => (
            <Comment profil={'user02.png'} nick={'닉네임'} txt={'댓글 내용'} time={'10분전'} />

          ))
        }
      </ul>
    </article>
  );
}

export default Chat;