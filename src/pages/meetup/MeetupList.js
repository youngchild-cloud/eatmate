import React, { useState } from 'react';
import './meetuplist.scss';
import TitleLeft from '../../components/common/TitleLeft';
import tabTxtImg1 from '../../assets/images/meetup/con-txt-img1.png';
import tabTxtImg2 from '../../assets/images/meetup/con-txt-img2.png';
import tabTxtImg3 from '../../assets/images/meetup/con-txt-img3.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';

function MeetupList(props) {

  const [tabTitle, setTabTitle] = useState(1);
  const navigate = useNavigate();

  const tabContent = (e) => {
    setTabTitle(e);
  }
  return (
    <section className='meetup-list'>
      <div className="inner">
        <TitleLeft title={'맛집 탐방'} link={'/write/meetup'} linkTitle={'맛집 탐방 글쓰기'} text={'게시물 쓰기'} />
        <ul className="tab-title">
          <li className={tabTitle === 1 ? 'act' : ''} onClick={() => tabContent(1)}><button>전체글</button></li>
          <li onClick={() => tabContent(2)} className={tabTitle === 2 ? 'act' : ''}><button className='tab2-btn'>모집중</button></li>
        </ul>

        <ul className='tab-content'>
          {/* 1번탭 (전체글)  */}
          <li className={tabTitle === 1 ? 'tab-content-list' : ''} onClick={() => tabContent(1)}>
            <div className='item'>
              <div className='item-txt'>
                <h3 onClick={() => navigate(`/meetup/detail`)}>피자 같이 먹으러 갈 사람!</h3>
                <p>
                  <span><img src={tabTxtImg1} alt="달력아이콘" /> 2026.01.11</span>
                  <span><img src={tabTxtImg2} alt="위치아이콘" /> 미스터피자</span>
                  <span><img src={tabTxtImg3} alt="인원아이콘" /> 3/4</span>
                </p>
                <p className='icon-num'>
                  <span><FontAwesomeIcon icon={faHeart} />10</span>
                  <span><FontAwesomeIcon icon={faComment} />3</span>
                </p>
              </div>
              <div className='item-img'>
                <img src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
              </div>
            </div>

            <div className='item'>
              <div className='item-txt'>
                <h3>피자 같이 먹으러 갈 사람!</h3>
                <p>
                  <span><img src={tabTxtImg1} alt="" /> 2026.01.11</span>
                  <span><img src={tabTxtImg2} alt="" /> 미스터피자</span>
                  <span><img src={tabTxtImg3} alt="" /> 3/4</span>
                </p>
                <p className='icon-num'>
                  <span><FontAwesomeIcon icon={faHeart} />10</span>
                  <span><FontAwesomeIcon icon={faComment} />3</span>
                </p>
              </div>
              <div className='item-img'>
                <img src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
              </div>
            </div>

            <div className='item'>
              <div className='item-txt'>
                <h3>피자 같이 먹으러 갈 사람!</h3>
                <p>
                  <span><img src={tabTxtImg1} alt="" /> 2026.01.11</span>
                  <span><img src={tabTxtImg2} alt="" /> 미스터피자</span>
                  <span><img src={tabTxtImg3} alt="" /> 3/4</span>
                </p>
                <p className='icon-num'>
                  <span><FontAwesomeIcon icon={faHeart} />10</span>
                  <span><FontAwesomeIcon icon={faComment} />3</span>
                </p>
              </div>
              <div className='item-img'>
                <img src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
              </div>
            </div>

            <div className='item'>
              <div className='item-txt'>
                <h3>피자 같이 먹으러 갈 사람!</h3>
                <p>
                  <span><img src={tabTxtImg1} alt="" /> 2026.01.11</span>
                  <span><img src={tabTxtImg2} alt="" /> 미스터피자</span>
                  <span><img src={tabTxtImg3} alt="" /> 3/4</span>
                </p>
                <p className='icon-num'>
                  <span><FontAwesomeIcon icon={faHeart} />10</span>
                  <span><FontAwesomeIcon icon={faComment} />3</span>
                </p>
              </div>
              <div className='item-img'>
                <img src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
              </div>
            </div>
            {/* 2번탭 리스트(모집중) */}
          </li>
          <li className={tabTitle === 2 ? 'tab-content-list' : ''}>
            <div className='item'>
              <div className='item-txt'>
                <h3>피자 먹으러 갈 사람 진짜 없나?</h3>
                <p>
                  <span><img src={tabTxtImg1} alt="" /> 2026.01.11</span>
                  <span><img src={tabTxtImg2} alt="" /> 미스터피자</span>
                  <span><img src={tabTxtImg3} alt="" /> 3/4</span>
                </p>
                <p className='icon-num'>
                  <span><FontAwesomeIcon icon={faHeart} />10</span>
                  <span><FontAwesomeIcon icon={faComment} />3</span>
                </p>
              </div>
              <div className='item-img'>
                <img src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
              </div>
            </div>

            <div className='item'>
              <div className='item-txt'>
                <h3>피자 먹으러 갈 사람 진짜 없나?</h3>
                <p>
                  <span><img src={tabTxtImg1} alt="" /> 2026.01.11</span>
                  <span><img src={tabTxtImg2} alt="" /> 미스터피자</span>
                  <span><img src={tabTxtImg3} alt="" /> 3/4</span>
                </p>
                <p className='icon-num'>
                  <span><FontAwesomeIcon icon={faHeart} />10</span>
                  <span><FontAwesomeIcon icon={faComment} />3</span>
                </p>
              </div>
              <div className='item-img'>
                <img src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
              </div>
            </div>

            <div className='item'>
              <div className='item-txt'>
                <h3>피자 먹으러 갈 사람 진짜 없나?</h3>
                <p>
                  <span><img src={tabTxtImg1} alt="" /> 2026.01.11</span>
                  <span><img src={tabTxtImg2} alt="" /> 미스터피자</span>
                  <span><img src={tabTxtImg3} alt="" /> 3/4</span>
                </p>
                <p className='icon-num'>
                  <span><FontAwesomeIcon icon={faHeart} />10</span>
                  <span><FontAwesomeIcon icon={faComment} />3</span>
                </p>
              </div>
              <div className='item-img'>
                <img src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
              </div>
            </div>

            <div className='item'>
              <div className='item-txt'>
                <h3>피자 먹으러 갈 사람 진짜 없나?</h3>
                <p>
                  <span><img src={tabTxtImg1} alt="" /> 2026.01.11</span>
                  <span><img src={tabTxtImg2} alt="" /> 미스터피자</span>
                  <span><img src={tabTxtImg3} alt="" /> 3/4</span>
                </p>
                <p className='icon-num'>
                  <span><FontAwesomeIcon icon={faHeart} />10</span>
                  <span><FontAwesomeIcon icon={faComment} />3</span>
                </p>
              </div>
              <div className='item-img'>
                <img src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
              </div>
            </div>

            <div className='item'>
              <div className='item-txt'>
                <h3>피자 먹으러 갈 사람 진짜 없나?</h3>
                <p>
                  <span><img src={tabTxtImg1} alt="" /> 2026.01.11</span>
                  <span><img src={tabTxtImg2} alt="" /> 미스터피자</span>
                  <span><img src={tabTxtImg3} alt="" /> 3/4</span>
                </p>
                <p className='icon-num'>
                  <span><FontAwesomeIcon icon={faHeart} />10</span>
                  <span><FontAwesomeIcon icon={faComment} />3</span>
                </p>
              </div>
              <div className='item-img'>
                <img src={`${process.env.PUBLIC_URL}/images/meetup/con-img1.png`} alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section >
  );
}

export default MeetupList;