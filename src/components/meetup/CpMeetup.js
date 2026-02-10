import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import './CpMeetup.scss';

import HeartCommentList from 'components/common/HeartCommentList';
import { dateFormat } from 'utils/dateFormat'

import tabTxtImg1 from 'assets/images/meetup/con-txt-img1.png';
import tabTxtImg2 from 'assets/images/meetup/con-txt-img2.png';
import tabTxtImg3 from 'assets/images/meetup/con-txt-img3.png';

const CpMeetup = ({ mypageUser, mypageCategory }) => {
  const [data, setData] = useState([]);
  const { user_no } = useParams();

  const loadData = () => {
    if (!mypageUser) {
      // 맛집 탐방
      axios.get('http://localhost:9070/meetup/all')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    } else {
      // 마이페이지 - 작성한 게시글
      axios.get('http://localhost:9070/meetup', {
        params: { user_no: mypageUser, board_cate: mypageCategory }
      })
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }
  }

  const loadMeetupData = () => {
    axios.get('http://localhost:9070/mymeetup', {
      params: { user_no }
    })
      .then(res => {
        const list = res.data.meetupData ?? res.data ?? [];
        setData(Array.isArray(list) ? list : []);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (window.location.pathname.startsWith('/mypage/meetup')) {
      loadMeetupData();
    } else {
      loadData();
    }
  }, [user_no, mypageUser, mypageCategory])

  return (
    <>
      <div className="cp-meetup">
        {/* 결과 없을 때 */}
        {data.length === 0 && (
          <p className="empty">해당 내용이 없습니다.</p>
        )}

        {data.map(item => (
          <Link to={`/meetup/detail/${item.bm_no}`} key={item.bm_no}>
            <div className='item'>
              <div className='item-txt'>
                <h3>{item.bm_title}</h3>
                <p>
                  <span><img src={tabTxtImg1} alt="달력 아이콘" /> {dateFormat(item.bm_m_date)}</span>
                  <span><img src={tabTxtImg2} alt="위치 아이콘" /> {item.bm_m_res}</span>
                  <span><img src={tabTxtImg3} alt="인원 아이콘" /> {item.bm_m_people}/{item.bm_m_people_all}</span>
                </p>
                <HeartCommentList heart={item.bm_heart} comment={item.bm_comment} />
              </div>
              <div className='item-img'>
                <img src={`http://localhost:9070/uploads/meetup/${item.bm_img}`} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CpMeetup;