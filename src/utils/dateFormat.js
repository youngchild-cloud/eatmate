// 날짜 함수(2026.03.01 or 10시간 전 or 10분 전)
export const dateFormat = (writeDate) => {
  const now = new Date();
  const d = new Date(writeDate);

  if (Number.isNaN(d.getTime())) return '';

  const diffMs = now - d;
  const diffMin = Math.floor(diffMs / 60000);

  // 서버 시간이 앞서서 미래로 잡히는 경우 방어 소스
  if (diffMin < 0) return '방금 전'; // 또는 날짜로 표시

  if (diffMin < 60) return `${diffMin}분 전`;
  if (diffMin < 60 * 24) return `${Math.floor(diffMin / 60)}시간 전`;

  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}.${m}.${day}`;
};
