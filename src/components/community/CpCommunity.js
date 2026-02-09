import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './CpCommunity.scss';

import HeartCommentList from 'components/common/HeartCommentList';
import { dateFormat } from 'utils/dateFormat'

const CpCommunity = ({ mypageUser, mypageCategory }) => {
  const [data, setData] = useState([]);

  // 자유게시판 리스트 조회
  const loadData = () => {
    if (!mypageUser) {
      // 커뮤니티
      axios.get('http://localhost:9070/communitylist')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    } else {
      // 마이페이지 - 작성한 게시글
      axios.get('http://localhost:9070/community', {
        params: { user_no: mypageUser, board_cate: mypageCategory }
      })
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    loadData();
  }, [mypageUser, mypageCategory])

  return (
    <>
      <div id="cp-community">
        {/* 자유게시판 글 목록  */}
        {data.map(item => (
          <div key={item.bc_no}>
            <Link to={`/community/detail/${item.bc_no}`} className='item'>
              {/* 프로필 + 닉네임 + 등록시간 */}
              <div className="comm-top">
                {/* 프로필 사진 public */}
                <div className="img-box">
                  <img src={`http://localhost:9070/uploads/user/${item.u_pic}`} alt={`${item.u_nick} 프로필`} />
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
              <HeartCommentList heart={`${item.bc_heart}`} comment={`${item.bc_comment}`} />
            </Link>
          </div>
        ))}

      </div>
    </>
  );
};

export default CpCommunity;