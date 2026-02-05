import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import './MypageTab.scss';
import CpReview from 'components/review/CpReview';
import CpMeetup from 'components/meetup/CpMeetup';
import CpCommunity from 'components/community/CpCommunity';

const MypageTab = ({ category }) => {
  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : '';
  const user_no = decoded.token_no;

  const [active, setActive] = useState(0);

  const tabs = [
    { tit: '맛집 리뷰', con: <CpReview mypageUser={user_no} mypageCategory={category} /> },
    { tit: '맛집 탐방', con: <CpMeetup mypageUser={user_no} mypageCategory={category} /> },
    { tit: '자유게시판', con: <CpCommunity mypageUser={user_no} mypageCategory={category} /> }
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