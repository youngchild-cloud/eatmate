// 날짜 함수(2026.03.01 or 10시간 전 or 10분 전)
export const dateFormat = (writeDate) => {
  // today 날짜
  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = String(todayDate.getMonth() + 1).padStart(2, '0');
  const todayDay = String(todayDate.getDate()).padStart(2, '0');
  const todayHour = todayDate.getHours();
  const todayMinute = todayDate.getMinutes();

  // 리뷰 입력 날짜
  const reviewDate = new Date(writeDate);
  const reviewYear = reviewDate.getFullYear();
  const reviewMonth = String(reviewDate.getMonth() + 1).padStart(2, '0');
  const reviewDay = String(reviewDate.getDate()).padStart(2, '0');
  const reviewHour = reviewDate.getHours();
  const reviewMinute = reviewDate.getMinutes();

  // 리턴시킬 날짜값
  let date;

  // today 날짜가 리뷰 입력 날짜와 일치하면
  if (todayYear === reviewYear && todayMonth === reviewMonth && todayDay === reviewDay) {
    const minutes = (todayHour - reviewHour) * 60 + todayMinute - reviewMinute;

    // 1시간(60분) 이하라면
    if (minutes < 60) {
      date = `${minutes}분 전`; // n분 전
    } else { // 1시간(60분) 이상이면
      date = `${Math.floor(minutes / 60)}시간 전`; // n시간 전
    }
  } else {
    date = `${reviewYear}.${reviewMonth}.${reviewDay}`; // yyyy.mm.dd
  }

  return date;
}