import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

// 전역 스타일
import './CommunityDetail.scss';

// 기능 컴포넌트
import TitleCenter from 'components/common/TitleCenter';
import HeartComment from 'components/common/HeartComment';
import Chat from 'components/common/Chat';
import { dateFormat } from 'utils/dateFormat'

function CommunityDetail(props) {
  const { bc_no } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState('');
  const token = localStorage.getItem('token');
  const decoded = token ? jwtDecode(token) : '';

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

  const myPage = token && decoded.token_no === data.u_no;
  // 본인 게시물 삭제
  const deleteData = async (bc_no) => {
    if (window.confirm('게시물을 삭제하시겠습니까?')) {
      try {
        await axios
          .delete(`http://localhost:9070/admin/community/${bc_no}`);

        alert('게시글을 삭제했습니다.');
        navigate('/community');
      } catch (err) {
        console.log(err)
      }
    }
  }
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className='community-detail'>
      <div className="inner">
        <TitleCenter title={'자유게시판'} />

        {/* 자유게시판 글 목록  */}
        <div key={data.bc_no} className='item'>

          <div className="comm-toptop user-writer">
            {/* 프로필 + 닉네임 + 등록시간 */}
            <div className="comm-top">
              {/* 프로필 사진 public */}
              <div className="img-box">
                <img src={`http://localhost:9070/uploads/user/${data.u_pic}`} alt={`${data.u_nick} 프로필`} />
              </div>
              {/* 닉네임 + 등록시간 */}
              <p className='txt-box'>
                <span className="nick">{data.u_nick}</span>
                |
                <span className="upload-time">{dateFormat(data.bc_date)}</span>
              </p>
            </div>

            {/* 수정/ 삭제 토글 */}
            {myPage &&
              (<div className="three-dot meetup-writer" onClick={() => setMenuOpen(prev => !prev)}>

                <div className="myPage-btn">
                  <span className='dot'>&middot;</span>
                  <span className='dot'>&middot;</span>
                  <span className='dot'>&middot;</span>
                </div>

                {menuOpen &&
                  (<div className="opne-menu-btn">
                    <Link to={`/community/modify/${bc_no}`}><button>수정</button></Link>
                    <button onClick={() => deleteData(bc_no)}>삭제</button>
                  </div>)}
              </div>)}
          </div>

          {/* 게시물 제목 + 게시글 내용 */}
          <div className="comm-mid">
            <h3 className='comm-title'>{data.bc_title}</h3>
            <p className='comm-content'>{data.bc_desc}</p>
          </div>

          {/* 하트 수 + 채팅 수 */}
          {/* p_board_cate는 게시판 카테고리(review, meetup, community) / p_board_no는 게시글 번호 / p_user_token는 토큰값을 decoded해서 넘겨주시면 됩니다. */}
          <HeartComment heart={data.bc_heart} comment={data.bc_comment} p_board_cate={'community'} p_board_no={bc_no} p_user_token={decoded} />
        </div>

        {/* 댓글 창 시작 */}
        <Chat p_board_cate={'community'} p_board_no={bc_no} />

      </div>
    </section>
  );
}

export default CommunityDetail;