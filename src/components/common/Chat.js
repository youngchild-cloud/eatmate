import { useEffect, useState } from 'react';
import axios from 'axios';
import './Chat.scss';
import Comment from './Chat/Comment';
import InputComment from './Chat/InputComment';
import { dateFormat } from 'utils/dateFormat';
import { jwtDecode } from 'jwt-decode';

function Chat({ p_board_cate, p_board_no }) {
  const [chatDate, setChatDate] = useState([]);
  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : '';
  const loginUserNo = decoded?.token_no;

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

  const handleDelete = async (ct_no) => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      try {
        await axios.delete(`http://localhost:9070/chat/comment/${ct_no}`);

        alert('댓글이 삭제되었습니다.');
        loadData();
      } catch (err) {
        console.log(err);
      }
    }
  }


  return (
    <div className='common-chat'>
      <InputComment p_board_cate={p_board_cate} p_board_no={p_board_no} />
      <ul className='comm-comment'>
        {
          chatDate.map(item => {
            const isMine = loginUserNo === item.ct_user_no;

            return (
              <Comment
                key={item.ct_no}
                profil={`${item.u_pic}`}
                nick={`${item.u_nick}`}
                txt={`${item.ct_desc}`}
                time={`${dateFormat(item.ct_date)}`}
                isMine={isMine}
                onDelete={() => handleDelete(item.ct_no)}
              />
            )
          })
        }
      </ul>
    </div>
  );
}

export default Chat;