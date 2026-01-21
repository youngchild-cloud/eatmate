import { useState } from 'react';
import './MypageTab.scss';
import CpReview from '../../components/review/CpReview';
import CpMeetup from '../../components/meetup/CpMeetup';
import CpCommunity from '../../components/community/CpCommunity';

const MypageTab = () => {
  const [active, setActive] = useState(0);

  const tabs = [
    { tit: '맛집 리뷰', con: <CpReview /> },
    { tit: '맛집 탐방', con: <CpMeetup /> },
    { tit: '자유게시판', con: <CpCommunity /> }
  ];

  return (
    <>
      <ul className="tab-title">
        {tabs.map((item, idx) => (
          <li key={item.tit} className={active === idx ? 'act' : ''}>
            <button type="button" onClick={() => setActive(idx)}>
              {item.tit}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabs[active].con}
      </div>
    </>
  );
};

export default MypageTab;