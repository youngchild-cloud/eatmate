import './CpCommunity.scss';
import HeartComment from 'components/common/HeartComment';
import { dateFormat } from 'utils/dateFormat'

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CpCommunity = ({ item }) => {
  const [data, setData] = useState([]);

  // 자유게시판 리스트 조회
  const loadData = () => {
    //서버 연결용 axios.get('http://localhost:9070/communitylist').then(res => {
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
      <div id="cp-community">
        {/* 자유게시판 글 목록  */}
        {data.map(item => (
          <div>
            <Link to={`/community/detail/${item.bc_no}`} className='item'>
              {/* 프로필 + 닉네임 + 등록시간 */}
              <div className="comm-top">
                {/* 프로필 사진 public */}
                <div className="img-box">
                  <img src={`${process.env.PUBLIC_URL}/images/community/user01.png`} alt="프로필 사진" />
                </div>
                {/* 닉네임 + 등록시간 */}
                <p className='txt-box'>
                  <span className="nick">{item.u_nick}</span>
                  |
                  <span className="upload-time">{dateFormat(item.bc_date)}</span>
                </p>
              </div>

              {/* 게시물 제목 + 게시글 내용 */}
              <div className="comm-mid">
                <h3 className='comm-title'>{item.bc_title}</h3>
                <p className='comm-content'>{item.bc_desc}</p>
              </div>

              {/* 하트 수 + 채팅 수 */}
              <HeartComment heart={`${item.bc_heart}`} comment={`${item.bc_comment}`} />
            </Link>
          </div>
        ))}

      </div>
    </>
  );
};

export default CpCommunity;