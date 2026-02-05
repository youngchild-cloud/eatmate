import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import './meetupdetail.scss';

import TitleCenter from 'components/common/TitleCenter';
import ButtonWide from 'components/common/ButtonWide';
import HeartComment from 'components/common/HeartComment';
import Chat from 'components/common/Chat';

import tabTxtImg1 from 'assets/images/meetup/con-txt-img1.png';
import tabTxtImg2 from 'assets/images/meetup/con-txt-img2.png';
import tabTxtImg3 from 'assets/images/meetup/con-txt-img3.png';
import { dateFormat } from 'utils/dateFormat'

const MeetupDetail = () => {
  const { bm_no } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : '';


  const handleJoin = () => {
    if (!token) {
      alert('로그인 후 사용 가능합니다.');
      navigate('/login');
      return;
    }
    axios.post('http://localhost:9070/meetup_join', {
      bm_no, user_no: decoded.token_no
    }).then(() => {
      setJoined(true);
      setMeetUp(prev => ({
        ...prev,
        bm_m_people: Number(prev.bm_m_people) + 1
      }))
    })
  }

  const handleCancel = () => {
    axios.delete('http://localhost:9070/meetup_join', {
      data: { bm_no, user_no: decoded.token_no }
    }).then(() => {
      setJoined(false);
      setMeetUp(prev => ({
        ...prev,
        bm_m_people: Number(prev.bm_m_people) - 1
      }))
    })
  }

  const [meetUp, setMeetUp] = useState({
    bm_no: '',
    bm_board_cate: '',
    bm_user_no: '',
    bm_img: '',
    bm_img2: '',
    bm_img3: '',
    bm_img4: '',
    bm_img5: '',
    bm_title: '',
    bm_desc: '',
    bm_m_date: '',
    bm_m_res: '',
    bm_m_people: '',
    bm_m_people_all: '',
    bm_heart: '',
    bm_comment: '',
    bm_date: '',
    u_nick: '',
    u_pic: '',
  });

  const myPage = token && decoded.token_no === meetUp.bm_user_no;

  // const myPageCheck = () => {
  //   if (!token) return;

  //   if (decoded.token_no === meetUp.bm_user_no) {
  //     setMyPage(true);
  //   } else {
  //     setMyPage(false)
  //   }
  // }


  const meetupMax = Number(meetUp.bm_m_people) === Number(meetUp.bm_m_people_all);

  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const meetupRes = await axios.get('http://localhost:9070/meetup/', {
          params: { bm_no }
        });
        setMeetUp(meetupRes.data);

        if (token) {
          const joinRes = await axios.get('http://localhost:9070/meetup_join', {
            params: { bm_no, user_no: decoded.token_no }
          });
          setJoined(joinRes.data.joined);
        } else {
          setJoined(false);
        }

      } catch (err) {
        console.log('조회 오류', err);
      }
    };

    fetchData();
  }, [bm_no, token]);

  // useEffect(() => {
  //   axios.get(`http://localhost:9070/meetup/`, {
  //     params: { bm_no }
  //   })
  //     .then(res => {
  //       console.log('서버응답값:', res.data);
  //       setMeetUp(res.data);
  //     })
  //     .catch(err => console.log('조회오류', err));
  // }, [bm_no]);


  // useEffect(() => {
  //   if (!token) return;
  //   axios.get('http://localhost:9070/meetup_join', {
  //     params: { bm_no, user_no: decoded.token_no }
  //   })
  //     .then(res => {
  //       setJoined(res.data.joined);
  //     });
  // }, [bm_no, token]);


  return (
    <section className='meetup-detail'>
      <div className="inner">
        <TitleCenter title={'맛집 탐방'} />

        <div className='user-writer'>
          <div className='user'>
            <div className='user-img'><img src={`http://localhost:9070/uploads/user/${meetUp.u_pic}`} alt="" /></div>
            <p className='user-info'>{meetUp.u_nick}<span className='user-info-gap'>&middot;</span>{dateFormat(meetUp.bm_date)}</p>
          </div>
          {myPage &&
            <div className='meetup-writer'>
              <div className='myPage-btn'>
                <span className='dot'>&middot;</span>
                <span className='dot'>&middot;</span>
                <span className='dot'>&middot;</span>
              </div>
              <button>수정</button>
              <button>삭제</button>
            </div>
          }
        </div>


        <div className='content-box'>
          <img className="content-img" src={`http://localhost:9070/uploads/meetup/${meetUp.bm_img}`} alt="" />
          <p className='content-txt'>{meetUp.bm_title}
            <span className='content-txt-detail'>
              {meetUp.bm_desc}
            </span>
          </p>
          <p className='content-info'>
            <span className='content-info-txt'><img src={tabTxtImg1} alt="달력아이콘" />{dateFormat(meetUp.bm_m_date)}</span>
            <span className='content-info-txt'><img src={tabTxtImg2} alt="위치아이콘" /> {meetUp.bm_m_res}</span>
            <span className='content-info-txt'><img src={tabTxtImg3} alt="인원아이콘" /> {meetUp.bm_m_people}/ {meetUp.bm_m_people_all}</span>
          </p>

          {joined &&
            (<p onClick={handleCancel} className='meetup-toggle-btn'>
              <ButtonWide text={'참석취소'} />
            </p>)}
          {!joined && meetupMax && (
            <p className='meetup-toggle-btn-close'>
              <ButtonWide text={'참석마감'} disabled />
            </p>)}
          {!meetupMax && !joined && (
            <p onClick={handleJoin}>
              <ButtonWide text={'참석하기'} />
            </p>)}

          {/* p_board_cate는 게시판 카테고리(review, meetup, community) / p_board_no는 게시글 번호 / p_user_token는 토큰값을 decoded해서 넘겨주시면 됩니다. */}
          <HeartComment heart={meetUp.bm_heart} comment={meetUp.bm_comment} p_board_cate={'meetup'} p_board_no={bm_no} p_user_token={decoded} />
        </div>

        {/* p_board_cate는 게시판 카테고리(review, meetup, community) / p_board_no는 게시글 번호를 넘겨주시면 됩니다. */}
        <Chat p_board_cate={'meetup'} p_board_no={bm_no} />
      </div>
    </section >

  );
};

export default MeetupDetail;