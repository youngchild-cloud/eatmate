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
assets
- font, scss, images 등 js를 제외한 모든 폴더가 있는 곳
---
components
- common
  - ButtonWide 버튼_fill_메인 컬러
  - ButtonShort 버튼_line_서브 컬러
  - TitleCenter 타이틀_가운데 / 글쓰기 버튼_왼쪽
  - TitleLeft 타이틀_왼쪽 / 뒤로가기 버튼_오른쪽
  - Rank5 맛집 리뷰 평점(별점)
  - Input 인풋_텍스트, 파일, 비밀번호, 날짜, 넘버
  - InputTextarea 인풋_텍스트박스
  - InputSelectbox 인풋_셀렉트박스
  - Bagde 프로필_뱃지

- layout
  - Header 헤더
  - Nav 내비
---
pages
- review 맛집 리뷰
  - ReviewList.js 맛집 리뷰 목록                => 퍼블 완료
  - ReviewDetail.js 맛집 리뷰 상세              => 퍼블 완료
  - RestaurantList.js 맛집 목록                 => 퍼블 완료
  - RestaurantDetail.js 맛집 상세               => 퍼블 완료

- meetup 맛집 맛집 탐방
  - MeetupList.js 맛집 맛집 탐방 목록           => 퍼블 완료
  - MeetupDetail.js 맛집 맛집 탐방 상세         => 퍼블 완료

- write 글쓰기
  - Write.js 글쓰기 모달                        => 퍼블 예정(혜련)
  - WriteReview.js 맛집 리뷰 글쓰기             => 퍼블 완료
  - WriteMeetup.js 맛집 맛집 탐방 글쓰기        => 퍼블 완료
  - WriteCommunity.js 자유게시판 글쓰기         => 퍼블 완료

- community 자유게시판
  - CommunityList.js 맛집 맛집 탐방 목록        => 퍼블 완료
  - CommunityDetail.js 맛집 맛집 탐방 상세      => 퍼블 완료

- mypage 마이페이지
  - Mypage.js 마이페이지                        => 퍼블 완료
  - MypageProfile.js 프로필
  - MypageBookmark.js 저장한 맛집
  - MypageMeetup.js 맛집 맛집 탐방 신청내역
  - MypageWrite.js 작성한 게시글
  - MypageLike.js 내가 남긴 좋아요
  - MypageComment.js 내가 남긴 댓글

- login 로그인/회원가입
  - Login.js 로그인                             => 퍼블 완료
  - Join.js 회원가입                            => 퍼블 완료

- notfound 404페이지
  - NotFound.js 404페이지                       => 퍼블 진행중(영찬)

- admin 관리자                                  => 퍼블 예정(지희)
  - restaurant 맛집 관리
    - RestaurantList.js 맛집 목록
    - RestaurantCreate.js 맛집 등록
  - reviews 게시판 관리 > 맛집 리뷰 관리 (디자인x 추후 시간 남으면 작업 예정)
  - meetups 게시판 관리 > 맛집 탐방 (디자인x 추후 시간 남으면 작업 예정)
  - community 게시판 관리 > 자유게시판 관리 (디자인x 추후 시간 남으면 작업 예정)
  - Login.js 로그인

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
- restaurant 매장 관리
  - restaurant 매장 목록
  - restaurant/create 매장 등록
- reviews 게시판 관리 > 맛집 리뷰 관리 (디자인x 추후 시간 남으면 작업 예정)
- meetups 게시판 관리 > 맛집 탐방 (디자인x 추후 시간 남으면 작업 예정)
- community 게시판 관리 > 자유게시판 관리 (디자인x 추후 시간 남으면 작업 예정)
- login 로그인

# 수정사항
- 피그마에 표시 => 이미지 올려서 보는 법 알려드릴 예정
- 리액트 순서 변경