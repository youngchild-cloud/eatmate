import React, { useState } from 'react';
import './meetuplist.scss';
import ButtonShort from '../../components/common/ButtonShort';
import tabTxtImg1 from '../../assets/images/meetups/con-txt-img1.png';
import tabTxtImg2 from '../../assets/images/meetups/con-txt-img2.png';
import tabTxtImg3 from '../../assets/images/meetups/con-txt-img3.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';

function MeetupList(props) {

  // const [tabTitle, setTabTitle] = useState(1);

  // const tabContent = [
  //   { title: '전체글', content:  },
  //   { title: '모집중', content:  },
  // ]

  return (

    <section className='meetup-list'>
      <div className="inner">
        <div className="title-box">
          <h2 className="main-title">맛집 탐방</h2>
          <ButtonShort type={'button'} text={'게시물 쓰기'} />
        </div>

        <ul className="tab-title">
          <li className='act'><button>전체글</button></li>
          <li><button>모집중</button></li>
        </ul>

        <ul className='tab-content'>
          <li className='tab-content1'

          >
            <div className='item'>
              <div className='item-txt'>
                <h3>피자 같이 먹으러 갈 사람!</h3>
                <p>
                  <span><img src={tabTxtImg1} alt="" /> 2026.01.11</span>
                  <span><img src={tabTxtImg2} alt="" /> 미스터피자</span>
                  <span><img src={tabTxtImg3} alt="" /> 3/4</span>
                </p>
                <p>
                  <span><FontAwesomeIcon icon={faHeart} />10</span>
                  <span><FontAwesomeIcon icon={faComment} />3</span>
                </p>
              </div>
              <div className='item-img'>
                <img src={`${process.env.PUBLIC_URL}/images/meetups/con-img1.png`} alt="" />
              </div>
              <div></div>
            </div>
          </li>
          <li className='tab-content2'>컨텐츠</li>
        </ul>
      </div>
    </section>
  );
}

export default MeetupList;