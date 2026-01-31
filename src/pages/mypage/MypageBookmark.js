import React from 'react';

import TitleCenter from 'components/common/TitleCenter';
import CpRestaurant from 'components/review/CpRestaurant';
import { useRequireLogin } from 'utils/useRequireLogin';

const MypageBookmark = () => {
  useRequireLogin(); // 페이지에 진입했을 때 로그인이 안되어 있다면 로그인 페이지로 이동

  return (
    <section className=''>
      <div className="inner">
        <TitleCenter title={'저장한 맛집'} />

        <CpRestaurant />
      </div>
    </section>
  );
};

export default MypageBookmark;