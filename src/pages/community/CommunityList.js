// scss
import './CommunityList.scss';

// 컴포넌트
import TitleLeft from 'components/common/TitleLeft';
import CpCommunity from 'components/community/CpCommunity';

function CommunityList({item}) {


  return (
    <>
      <section className="community-list">
        <div className="inner">
          <TitleLeft title={'자유게시판'} link={'/write/community'} linkTitle={'자유게시판 글쓰기'} text={'게시물 쓰기'} />

            <CpCommunity />
        </div>
      </section>
    </>
  );
}

export default CommunityList;