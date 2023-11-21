// 제목 제한 함수
export const changeHeadline = (headlineMain: string,
  maxLength: number) => {
    return `${headlineMain.slice(0, maxLength)}...`;
};
// 뉴스이름 제한 함수
export const changeSource = (source: string, maxLength: number) => {
  if (source.length > maxLength) {
    return `${source.slice(0, maxLength)}...`;
  }
  return source;
};
// 기자이름 제한 함수
export const changeByline = (bylineOriginal: string,
  maxLength: number) => {
    return bylineOriginal?.slice(0, maxLength);
};
//Api Date 날짜 변환 컴포넌트
export const changDate = (pubDate: string) => {
  const date = new Date(pubDate);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  };
  // 직접 원하는 형식으로 날짜 변환조합 함수
  const formattedDate = date.toLocaleString('ko-KR', options);
  return `${formattedDate}`;
};


