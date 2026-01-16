import React from 'react';

import './CommunityDetail.scss'
// 헤더 콤포넌트
import TitleCenter from '../../components/common/TitleCenter';
//이미지
import default_profile from '../../assets/images/default_profile.png';
//아이콘
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faComment as faCommentRegular } from "@fortawesome/free-regular-svg-icons";

function CommunityDetail(props) {
  return (
    <section className='community-detail'>
      <div className="inner">
        <TitleCenter title={'자유게시판'} />

        {/* 자유게시판 글 목록  */}
        <div className='item'>
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
          <div className="comm-bot">
            <span>
              <FontAwesomeIcon icon={faHeartRegular} />
              12
            </span>
            <span>
              <FontAwesomeIcon icon={faCommentRegular} />
              12
            </span>
          </div>
        </div>

        {/* ------댓글 입력------- */}
        <div className='comm-input'>
          <div className="input-img">
            <img src={default_profile} alt="기본프로필" />
          </div>
          <form className="input-form">
            <input type="text" placeholder='댓글을 입력하세요' />
            <button>입력</button>
          </form>
        </div>

        {/* ------게시글 댓글------ */}
        <ul className='comm-comment'>
          <li>
            <div className="comment-img">
              <img src={`${process.env.PUBLIC_URL}/images/community/user02.png`} alt="프로필 사진" />
            </div>

            <div className="comment-content">
              <span className='comment-nick'>룰루랄라</span>
              <p className='comment-txt'>넘 늦었다 지금은 ㄴㄴ</p>
              <span className="comment-time">10분전</span>
            </div>
          </li>

          <li>
            <div className="comment-img">
              <img src={`${process.env.PUBLIC_URL}/images/community/user03.png`} alt="프로필 사진" />
            </div>

            <div className="comment-content">
              <span className='comment-nick'>sdfas</span>
              <p className='comment-txt'>asdfasdfasdf</p>
              <span className="comment-time">11분전</span>
            </div>
          </li>

        </ul>

      </div>
    </section>
  );
}

export default CommunityDetail;