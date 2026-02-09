import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './HeartComment.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as HeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as HeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';

const HeartComment = ({ heart, comment, p_board_cate, p_board_no, p_user_token }) => {
  const [heartToggle, setHeartToggle] = useState(false);
  const [heartCount, setHeartCount] = useState(heart);
  const navigate = useNavigate();

  // props로 받은 heart 값이 바뀌면 표시 카운트 동기화
  useEffect(() => {
    setHeartCount(heart);
  }, [heart]);

  // // props로 받아와서 backend로 넘김
  // const boardInfo = {
  //   board_cate: p_board_cate, // board 카테고리(맛집 리뷰, 맛집 탐방, 자유게시판)
  //   board_no: p_board_no, // board 게시판 번호
  //   heart_toggle: heartToggle, // 하트를 누른 상태인지/아닌지(true/false) 값
  //   user_no: p_user_token.token_no, // 현재 로그인한 user의 no값
  // };

  // 현재 로그인한 user가 해당 게시글에 하트를 누른 상태인지 확인
  useEffect(() => {
    if (!p_board_cate || !p_board_no || !p_user_token?.token_no) return;
    hasHeartClick();
  }, [p_board_cate, p_board_no, p_user_token?.token_no]);

  const hasHeartClick = async () => {
    try {
      const payload = {
        board_cate: p_board_cate,
        board_no: p_board_no,
        user_no: p_user_token?.token_no,
      };

      const res = await axios.post(`http://localhost:9070/heart/user`, payload);

      // 눌렀으면 객체, 아니면 undefined/null
      setHeartToggle(!!res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 하트를 눌렀을 때
  const heartClick = async () => {
    // 토큰을 확인하여 로그인이 안되었다면 로그인 페이지로 이동
    const token = localStorage.getItem('token');
    if (!token) {
      if (window.confirm('로그인 후 사용 가능합니다. 로그인 페이지로 이동하겠습니까?')) {
        navigate('/login');
      } else {
        return
      }
    }

    const prev = heartToggle;
    const next = !prev;

    // 하트 색상 변경
    setHeartToggle(next);
    setHeartCount(c => c + (prev ? -1 : +1));

    const payload = {
      board_cate: p_board_cate,
      board_no: p_board_no,
      heart_toggle: prev,
      user_no: p_user_token.token_no,
    };

    // db 데이터 업데이트/입력
    try {
      // board_review/board_meetup/board_community 테이블의 하트 수 업데이트
      await axios.put(`http://localhost:9070/board/heart`, payload);

      // heard 테이블의 데이터 입력(생성)
      await axios.post(`http://localhost:9070/heart`, payload);
    } catch (err) {
      console.log(err);

      // 실패시 롤백
      setHeartToggle(prev);
      setHeartCount(c => c + (prev ? +1 : -1));
    }
  }

  return (
    <ul className='common-heart-comment'>
      <li>
        <button
          className={heartToggle && 'act'}
          onClick={heartClick}
        >
          {heartToggle ? <FontAwesomeIcon icon={HeartSolid} /> : <FontAwesomeIcon icon={HeartRegular} />}
        </button>
        <span>{heartCount}</span>
      </li>
      <li>
        <FontAwesomeIcon icon={faComment} />
        <span>{comment}</span>
      </li>
    </ul>
  );
};

export default HeartComment;