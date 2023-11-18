/**
 * api 주소
 * https://api.nytimes.com/svc/search/v2
 * useState와 useEffect를 사용하여 api를 가져온다.
 * 가져온 api를 map을 이용하여 출력한다.
 * 
 * 질문
 * api.tsx라는 파일에 useQuery를 작성 하여 사용하기를 원함.
 * 그러면 Main.tsx쪽에다 불러온 api를 넘겨줘서 main에다 넣어줘야 하는데 어떻게 하면 좋을까?
 */

import { useQuery } from "react-query";

const fetchData = async () => {
	const response = await
		fetch(
			'https://api.nytimes.com/svc/search/v2/articlesearch.json?q={query}&fq={filter}'
			);
	const data = await response.json();
	return data;
};

export const useApiQuery = () => {
	const {data, error} = useQuery('myQuerykey', fetchData);

	return { data, error };
}

export default useApiQuery;