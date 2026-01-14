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
1. CSS > class, id 규칙은 케밥케이스 (ex. text-box, title-area)
2. JavaScript > 변수, 함수 규칙은 카멜케이스 (ex. let textBox, const titleArea)

# 폴더/페이지명
* assets
- font, scss, images 등 js를 제외한 모든 폴더가 있는 곳

* components
- common
  - ButtonWide 버튼_fill_메인 컬러
  - ButtonShort 버튼_line_서브 컬러
- layout
  - Header 헤더
  - Nav 내비

* pages
- reviews 맛집 리뷰
  - ReviewList 홈
  - ReviewDetail 리뷰 상세
  - RestaurantList 맛집 목록
  - RestaurantDetail 맛집 상세
- meetups 맛집 탐방
  - MeetupList 맛집 탐방 목록
  - MeetupDetail 맛집 탐방 상세
- write 글쓰기
  - WriteReview 리뷰 글쓰기
  - WriteMeetup 탐방 글쓰기
  - WriteCommunity 자유게시판 글쓰기
- community 자유게시판
  - CommunityList 맛집 탐방 목록
  - CommunityDetail 맛집 탐방 상세
- mypage 마이페이지
  - Mypage 홈
  - MypageProfile 프로필
  - MypageBookmark 저장한 식당
  - MypageMeetup 맛집 탐방 신청내역
  - MypageWrite 작성한 게시글
  - MypageLike 내가 남긴 좋아요
  - MypageComment 내가 남긴 댓글
- login 로그인/회원가입
  - Login 로그인
  - Join 회원가입
- not-found 404페이지
  - NotFound 404페이지

# 참고사항
