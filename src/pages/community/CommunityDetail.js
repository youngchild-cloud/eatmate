import React from 'react';
import TitleCenter from '../../components/common/TitleCenter';

function CommunityDetail(props) {
  return (
    <section className='community-detail'>
      <div className="inner">
        <TitleCenter title={'자유게시판'} />
        {/* 영찬님 => vw 바꾸는거랑 위에 타이틀 추가한거 내일 저한테 물어봐주세요!!! */}
      </div>
    </section>
  );
}

export default CommunityDetail;