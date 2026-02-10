
// 날짜 함수 ( 2026.03.01 24:00)
export const dateFormat2 = (value) => {

  const date = value;
  const dateTime = date.slice(0, 16).replace("T", " ");
  return dateTime;
}
export const dateFormat3 = (value) => {

  const date = value;
  const dateTime = date.slice(0, 10)
  return dateTime;
}
