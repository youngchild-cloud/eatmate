import { Link } from 'react-router-dom';
import './CpCommunity.scss';
import HeartComment from 'components/common/HeartComment';

const CpCommunity = () => {
  return (
    <>
      <div id="cp-community">
        {/* 자유게시판 글 목록  */}
        <Link to="/community/detail/" className='item'>
          {/* 프로필 + 닉네임 + 등록시간 */}
          <div className="comm-top">
            {/* 프로필 사진 public */}
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/community/user01.png`} alt="프로필 사진" />
            </div>
            {/* 닉네임 + 등록시간 */}
            <p className='txt-box'>
              <span className="nick">피자광인</span>
              |
              <span className="upload-time">23:13</span>
            </p>
          </div>

          {/* 게시물 제목 + 게시글 내용 */}
          <div className="comm-mid">
            <h3 className='comm-title'>나 피자 진짜 좋아하는데</h3>
            <p className='comm-content'>지금 시간에 먹으면 오바야?</p>
          </div>

          {/* 하트 수 + 채팅 수 */}
          <HeartComment heart={'10'} comment={'10'} />
        </Link>

        {/* 자유게시판 글 목록  */}
        <Link to="/community/detail/" className='item'>
          {/* 프로필 + 닉네임 + 등록시간 */}
          <div className="comm-top">
            {/* 프로필 사진 public */}
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/community/user01.png`} alt="프로필 사진" />
            </div>
            {/* 닉네임 + 등록시간 */}
            <p className='txt-box'>
              <span className="nick">피자광인</span>
              |
              <span className="upload-time">23:13</span>
            </p>
          </div>

          {/* 게시물 제목 + 게시글 내용 */}
          <div className="comm-mid">
            <h3 className='comm-title'>나 피자 진짜 좋아하는데자 진짜 좋아하는데자 진짜 좋아하는데자 진짜 좋아하는데자 진짜 좋아하는데자 진짜 좋아하는데자 진짜 좋아하는데자 진짜 좋아하는데자 진짜 좋아하는데자 진짜 좋아하는데자 진짜 좋아하는데</h3>
            <p className='comm-content'>지금 시간에 먹으면 오바야?지금 시간에 먹으면 오바야?지금 시간에 먹으면 오바야?지금 시간에 먹으면 오바야?지금 시간에 먹으면 오바야?지금 시간에 먹으면 오바야?</p>
          </div>

          {/* 하트 수 + 채팅 수 */}
          <HeartComment heart={'10'} comment={'10'} />
        </Link>

        {/* 자유게시판 글 목록  */}
        <Link to="/community/detail/" className='item'>
          {/* 프로필 + 닉네임 + 등록시간 */}
          <div className="comm-top">
            {/* 프로필 사진 public */}
            <div className="img-box">
              <img src={`${process.env.PUBLIC_URL}/images/community/user01.png`} alt="프로필 사진" />
            </div>
            {/* 닉네임 + 등록시간 */}
            <p className='txt-box'>
              <span className="nick">피자광인</span>
              |
              <span className="upload-time">23:13</span>
            </p>
          </div>

          {/* 게시물 제목 + 게시글 내용 */}
          <div className="comm-mid">
            <h3 className='comm-title'>나 피자 진짜 좋아하는데</h3>
            <p className='comm-content'>지금 시간에 먹으면 오바야?</p>
          </div>

          {/* 하트 수 + 채팅 수 */}
          <HeartComment heart={'10'} comment={'10'} />
        </Link>
      </div>
    </>
  );
};

export default CpCommunity;