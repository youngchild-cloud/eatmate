import { useParams } from 'react-router-dom';
// 전역 스타일
import './CommunityDetail.scss';

// 기능 컴포넌트
import TitleCenter from 'components/common/TitleCenter';
import HeartComment from 'components/common/HeartComment';
import Chat from 'components/common/Chat';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CommunityDetail(props) {
  const { bc_no } = useParams();
  const [data, setData] = useState([]);

  const loadData = () => {
    axios.get(`http://localhost:9070/community/detail/${bc_no}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    loadData();
  }, [bc_no]);

  return (
    <section className='community-detail'>
      <div className="inner">
        <TitleCenter title={'자유게시판'} />

        {/* 자유게시판 글 목록  */}
        {data.map(item => (
          <div key={item.bc_no} className='item'>
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
                <span className="upload-time">{item.bc_date}</span>
              </p>
            </div>

            {/* 게시물 제목 + 게시글 내용 */}
            <div className="comm-mid">
              <h3 className='comm-title'>{item.bc_title}</h3>
              <p className='comm-content'>{item.bc_desc}</p>
            </div>

            {/* 하트 수 + 채팅 수 */}
            <HeartComment heart={`${item.bc_heart}`} comment={`${item.bc_comment}`} />
          </div>
        ))
        }

        {/* 댓글 창 시작 */}
        <Chat p_board_cate={'community'} p_board_no={bc_no} />

      </div>
    </section>
  );
}

export default CommunityDetail;