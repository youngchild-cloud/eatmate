# eatmate
- 팀 프로젝트
- 3조_useTeam(김영찬, 김혜련, 임지희)

# 일정
- 26.01.15(목) ~ 26.01.23(금) > 퍼블 완료
- 26.01.26(월) ~ 26.02.06(금) > 개발 완료
- 26.02.09(월) ~ 26.02.12(목) > QA / ppt 제작

# 기본세팅
0. 설정(ctrl + ,)에서 Editor: Format On Save 체크
1. git clone https://github.com/youngchild-cloud/eatmate.git
2. npm i
3. npm i sass
4. npm i swiper
5. npm i --save @fortawesome/react-fontawesome@latest
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
6. npm i axios
7. npm i react-router-dom

# 개발규칙
- CSS > class, id 규칙은 케밥케이스 (ex. text-box, title-area)
- JavaScript > 변수, 함수 규칙은 카멜케이스 (ex. let textBox, const titleArea)
- React > improt 순서(아래에 예시 넣어둠)
// 1. 외부 라이브러리
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 2. 전역 스타일
import './styles/reset.css';
import './styles/common.css';
import './styles/layout.css';

// 3. 레이아웃
import Header from './layout/Header';
import Footer from './layout/Footer';

// 4. 페이지
import Main from './components/Main';
import Intro from './components/Intro';
import Info from './components/Info';
import Event from './components/Event';
import Customer from './components/Customer';

// 5. 기능 컴포넌트
import Login from './components/Login';
import Join from './components/Join';
import Cart from './components/Cart';
import Order from './components/Order';

// 6. 이미지
import logo from './assets/images/logo.png';

# 폴더/페이지명
layouts/ : “껍데기(헤더/푸터/네비 + Outlet)”만 담당
routes/ : 라우팅 정의만 담당
pages/ : 화면(페이지)
components/ : 재사용 컴포넌트
assets/ : 이미지/스타일/폰트
data/ : 더미데이터/상수/목업
---
pages
- review 맛집 리뷰
  - ReviewList.js 맛집 리뷰 목록              => 개발 예정(혜련)
  - ReviewDetail.js 맛집 리뷰 상세
  - RestaurantList.js 맛집 목록               => 개발 예정(혜련)
  - RestaurantDetail.js 맛집 상세

- meetup 맛집 맛집 탐방
  - MeetupList.js 맛집 맛집 탐방 목록         => 개발 예정(지희)
  - MeetupDetail.js 맛집 맛집 탐방 상세

- write 글쓰기
  - Write.js 글쓰기 모달
  - WriteReview.js 맛집 리뷰 글쓰기
  - WriteMeetup.js 맛집 맛집 탐방 글쓰기
  - WriteCommunity.js 자유게시판 글쓰기

- community 자유게시판
  - CommunityList.js 맛집 맛집 탐방 목록      => 개발 예정(영찬)
  - CommunityDetail.js 맛집 맛집 탐방 상세

- mypage 마이페이지
  - Mypage.js 마이페이지
  - MypageProfile.js 프로필
  - MypageBookmark.js 저장한 맛집
  - MypageMeetup.js 맛집 맛집 탐방 신청내역
  - MypageWrite.js 작성한 게시글
  - MypageLike.js 내가 남긴 좋아요
  - MypageComment.js 내가 남긴 댓글

- login 로그인/회원가입
  - Login.js 로그인
  - Join.js 회원가입

- notfound 404페이지
  - NotFound.js 404페이지

- admin 관리자
  - login 로그인
  - restaurant 매장 관리
    - restaurant 매장 목록
    - restaurant/create 매장 등록 
  - board 게시판 관리
    - reviews
      - reviews 맛집 리뷰 목록
      - reviews/create 맛집 리뷰 등록
    - meetups
      - meetups 맛집 탐방 목록
      - meetups/create
    - community
      - community 자유게시판 목록
      - community/create
  - user 회원 관리
    - user 회원 목록

# url 주소
review 맛집 리뷰
- review/ 맛집 리뷰
- review/detail 맛집 리뷰 상세
- review/restaurant 매장 목록
- review/restaurant/detail 매장 상세

meetup 맛집 맛집 탐방
- meetup 맛집 맛집 탐방 목록
- meetup/detail 맛집 맛집 탐방 상세

write 글쓰기
- write/review 맛집 리뷰 글쓰기
- write/meetup 맛집 맛집 탐방 글쓰기
- write/community 자유게시판 글쓰기

community 자유게시판
- community 맛집 맛집 탐방 목록
- community/detail 맛집 맛집 탐방 상세

mypage 마이페이지
- mypage 홈
- mypage/profile 프로필
- mypage/bookmark 저장한 맛집
- mypage/meetup 맛집 맛집 탐방 신청내역
- mypage/write 작성한 게시글
- mypage/like 내가 남긴 좋아요
- mypage/comment 내가 남긴 댓글

login 로그인/회원가입
- login 로그인
- join 회원가입

notfound 404페이지
- notfound 404페이지

admin 관리자
- login 로그인
- restaurant 매장 관리
  - restaurant 매장 목록
  - restaurant/create 매장 등록
- board 게시판 관리
  - reviews
    - board/reviews 맛집 리뷰 목록
    - board/reviews/create 맛집 리뷰 등록
  - meetups
    - board/meetups 맛집 탐방 목록
    - board/meetups/create
  - community
    - board/community 자유게시판 목록
    - board/community/create
- user 회원 관리
  - user 회원 목록