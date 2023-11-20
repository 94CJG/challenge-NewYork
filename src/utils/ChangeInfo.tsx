

//Api Date 날짜 변환 컴포넌트
export const changDate = (pubDate: string) => {
  const date = new Date(pubDate);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  };
  // 직접 원하는 형식으로 날짜 변환조합 컴포넌트
  const formattedDate = date.toLocaleString('ko-KR', options);
  return `${formattedDate}`;
};

// 뉴스이름 제한 컴포넌트
export const changeSource = (source: string, maxLength: number) => {
  if(source.length > maxLength) {
    return `${source.slice(0, maxLength)}...`;
  }
  return source;
};

// 기자이름 제한 컴포넌트
export const changeByline = (byline: {original: string}, maxLength:number) => {
  return byline?.original?.slice(0, maxLength) ?? "Unknown people";
};

export const changeHeadline = (headline: {main: string},
  maxLength: number) => {
    return headline?.main?.slice(0, maxLength);
  };

/**
 * Main에 className="item-date"
 * changDate(item.pub_date)를 호출 함으로써,
 * Api의 값인 pub_date를 받아오고,
 * 호출 한 곳에서 changDate (pub_date)로 값을
 * 내려 받는다. 
 * 그 이후 중괄호 안에 있는 함수들이 실행 되고,
 * return으로 인해 다시 호출한 곳으로 간다.
 * 그렇게 함으로써 화면에 랜더링이 된다!
 */