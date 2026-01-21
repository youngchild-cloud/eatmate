import React from 'react';
import TitleCenter from '../../components/common/TitleCenter';
import CpRestaurant from '../../components/review/CpRestaurant';

const MypageBookmark = () => {
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