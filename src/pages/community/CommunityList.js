// scss
import axios from 'axios';
import './CommunityList.scss';

// 컴포넌트
import TitleLeft from 'components/common/TitleLeft';
import CpCommunity from 'components/community/CpCommunity';
import { useEffect, useState } from 'react';

function CommunityList({item}) {
  const [data, setData] = useState([]);

  // 자유게시판 리스트 조회
  const loadData = () => {
    axios.get('http://localhost:9070/communitylist').then(res => {
      setData(res.data);
    })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    loadData();
  }, [])


  return (
    <>
      <section className="community-list">
        <div className="inner">
          <TitleLeft title={'자유게시판'} link={'/write/community'} linkTitle={'자유게시판 글쓰기'} text={'게시물 쓰기'} />


          
          {data.map((item) => (
            <CpCommunity key={item.bc_no} item={item} />
          ))}
          
          

    
        </div>
      </section>
    </>
  );
}

export default CommunityList;