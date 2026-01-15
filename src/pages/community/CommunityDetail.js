import React from 'react';
import { Link } from 'react-router-dom';

//아이콘
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faComment as faCommentRegular } from "@fortawesome/free-regular-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function CommunityDetail(props) {
  return (
    <section>
      <div className="inner">
        {/* 제목 + 글쓰기 버튼 */}
        <div className="info-box">
          <FontAwesomeIcon icon={faAngleLeft} />
          <h2>자유게시판</h2>
        </div>

        {/* 자유게시판 글 목록  */}
        <Link to="community/detail/{``}">
          <div className="comm" style={{ width: '700px' }} >

            {/* 프로필 + 닉네임 + 등록시간 */}
            <div className="comm-top">
              {/* 프로필 사진 public */}
              <div className="img-box">
                <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="프로필 사진" />
              </div>
              {/* 닉네임 + 등록시간 */}
              <span className="nick">피자광인</span>|
              <span className="upload-time">23:13</span>
            </div>

            {/* 게시물 제목 + 게시글 내용 */}
            <div className="comm-mid">
              <h3 className='comm-title'>나 피자 진짜 좋아하는데</h3>
              <p className='comm-content'>지금 시간에 먹으면 오바야?</p>
            </div>

            {/* 하트 수 + 채팅 수 */}
            <div className="comm-bot">
              <p>
                <span>
                  <FontAwesomeIcon icon={faHeartRegular} />
                  숫자
                </span>
                <span>
                  <FontAwesomeIcon icon={faCommentRegular} />
                  숫자
                </span>
              </p>
            </div>

          </div>
        </Link>
      </div>

    </section>
  );
}

export default CommunityDetail;