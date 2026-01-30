import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
    u_pic: ''
  });





  const [meetupChange, setMeetupChange] = useState(true);

  const [meetupIcon, setMeetupIcon] = useState(true);

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setMeetupCount(meetupCount + 1);
  // }

  const meetupMax = Number(meetUp.bm_m_people) === Number(meetUp.bm_m_people_all);


  useEffect(() => {
    axios.get(`http://localhost:9070/meetup/${bm_no}`)
      .then(res => {
        console.log('서버응답값:', res.data);
        setMeetUp(res.data);
      })
      .catch(err => console.log('조회오류', err));
  }, [bm_no])

  const meetupNum = () => {
    setMeetUp(prev => {
      const num = prev.bm_m_people;
      const max = prev.bm_m_people_all;


      if (num < max) {
        setMeetupChange(false)
        return {
          ...prev,
          bm_m_people: num + 1
        };
      }
      if (num >= max) {
        setMeetupChange(true)
        return {
          ...prev,
          bm_m_people: num - 1
        }
      }
      // if (num === max && MeetupChange) {

      //   alert('마감된 탐방입니다.');
      //   return {
      //     ...meetUp,
      //     bm_m_people: num + 0
      //   };
      // }
    })
  }

  let button;
  if (!meetupChange) {
    button = (
      <p className='meetup-toggle-btn' onClick={meetupNum}>
        <ButtonWide text={'참석취소'} />
      </p>
    )
  } else if (meetupMax) {
    button = (
      <p className='meetup-toggle-btn-close' onClick={meetupNum}>
        <ButtonWide text={'참석마감'} disabled />
      </p>)
  } else {
    button = (
      <p onClick={meetupNum}>
        <ButtonWide text={'참석하기'} />
      </p>)
  }



  return (
    <section className='meetup-detail'>
      <div className="inner">
        <TitleCenter title={'맛집 탐방'} />

        <div className='user'>
          <div className='user-img'><img src={`${process.env.PUBLIC_URL}/images/meetup/${meetUp.u_pic}`} alt="" /></div>
          <p className='user-info'>{meetUp.u_nick}<span className='user-info-gap'>&middot;</span>{dateFormat(meetUp.bm_date)}</p>
        </div>

        <div className='content-box'>
          <img className="content-img" src={`${process.env.PUBLIC_URL}/images/meetup/${meetUp.bm_img}`} alt="" />
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


          {button}


          {/* {
            meetupChange ?
              (<p onClick={() => setMeetupChange(false)}>
                <ButtonWide text={'참석하기'} />
              </p>) :
              (<p className='meetup-toggle-btn' onClick={() => setMeetupChange(true)}>
                <ButtonWide text={'참석취소'} />
              </p>)
          } */}

          <HeartComment heart={meetUp.bm_heart} comment={meetUp.bm_comment} />
        </div>

        {/* 댓글 */}
        <Chat p_board_cate={'meetup'} p_board_no={bm_no} />
      </div>
    </section >

  );
};

export default MeetupDetail;