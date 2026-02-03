import { useEffect, useState } from 'react';
import axios from 'axios';

import './Chat.scss';

import Comment from './Chat/Comment';
import InputComment from './Chat/InputComment';

import { dateFormat } from 'utils/dateFormat';

function Chat({ p_board_cate, p_board_no }) {
  const [chatDate, setChatDate] = useState([]);

  // props로 받아와서 backend로 넘김
  const boardInfo = {
    board_cate: p_board_cate, // board 카테고리(맛집 리뷰, 맛집 탐방, 자유게시판)
    board_no: p_board_no // board 게시판 번호
  };

  const loadData = async () => {
    try {
      const res = await axios.post('http://localhost:9070/common/chat', boardInfo);

      setChatDate(res.data);
    } catch (err) {
      console.log(err.response)
    }
  }

  useEffect(() => {
    loadData();
  }, [p_board_cate, p_board_no])

  return (
    <article className='common-chat'>
      <InputComment p_board_cate={p_board_cate} p_board_no={p_board_no} />
      <ul className='comm-comment'>
        {
          chatDate.map(item => (
            <Comment
              key={item.ct_no}
              profil={`${item.u_pic}`}
              nick={`${item.u_nick}`}
              txt={`${item.ct_desc}`}
              time={`${dateFormat(item.ct_date)}`}
            />
          ))
        }
      </ul>
    </article>
  );
}

export default Chat;