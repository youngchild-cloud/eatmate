import { useState } from 'react';

import './meetuplist.scss';

import TitleLeft from 'components/common/TitleLeft';
import CpMeetup from 'components/meetup/CpMeetup';
import CpMeetup2 from 'components/meetup/CpMeetup2';

function MeetupList(props) {
  const [tabTitle, setTabTitle] = useState(1);

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
          <li className={tabTitle === 2 ? 'tab-content-list' : ''} onClick={() => tabContent(1)}>
            <CpMeetup />
          </li>

          {/* 2번탭 리스트(모집중) */}
          <li className={tabTitle === 1 ? 'tab-content-list' : ''}>
            <CpMeetup2 />
          </li>
        </ul>
      </div>
    </section >
  );
}

export default MeetupList;