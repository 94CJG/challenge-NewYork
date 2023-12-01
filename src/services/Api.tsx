import { useInfiniteQuery } from "@tanstack/react-query";

// export const useApiQuery = () => {
// 	const { data: apiData, error, refetch } = useQuery({
// 		queryKey: ['repoData'],
// 		queryFn: () =>
// 			fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?' +
// 				'q=new+york+times&page=10' +
// 				'&sort=oldest' +
// 				'&pub_date' +
// 				'&api-key=h6IwBnNIMxY1EfOVVAeeN0XAFFfKSfQM').then(
// 				(res) => res.json(),
// 			),
// 	});

// 	useEffect(() => {
// 		const handleActivateQuery = () => {
// 			refetch();
// 		};
// 		handleActivateQuery();
// 	}, []);
// 	return { data: apiData, error };
// }

/**
 * @param page page번호
 * @returns 아래 API를 통해 받아온 데이터를 10개씩 return한다.
 * @description 데이터를 fetch하는 함수
 * 
 */


const fetchData = async (page:number) => {
	const response = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=${page}&sort=newest&pub_date&api-key=h6IwBnNIMxY1EfOVVAeeN0XAFFfKSfQM`
  );
	const data = await response.json()
	return data.response.docs;
}

export const useInfinityScrollApiQuery = () => {
	return useInfiniteQuery({
		queryKey: ["scrolls"],
		queryFn: ({ pageParam = 1 }) => fetchData(pageParam),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			const limit = 10;

			if(lastPage?.length === limit) {
				return allPages.length + 1;
			}
			return undefined;
		},
	})
		//useQuery와 사용법은 같은데, useApiQuery()에서 값을 사용 할 수는 없을까..? -> 구조분해 할당으로 변수명을 다르게 함.
		//getNextPageParam()
		//ㄴ 이 함수는 이전 페이지에서 다음 페이지로 이동하기 위한 매개변수를 반환하는 역할을 한다.
		//페이징된 데이터에서 각 페이지가 어떻게 구성되었는지에 따라 함수 반환 값이 달라짐.
		//getNextPageParm 함수를 통해 얻은 값은 fetchnextPage 함수에 전달된다.
		//initialPageParam 사용할 페이지 번호를 설정하는 데 사용되는 프로퍼티.
		//initialPageParam 초기 페이지를 설정해주고, 값을 설정을 해주지 않으면 undefined가 사용되어
		//initialPageParam 첫 번째 호출 시에 pageParam이 undefined로 전달된다.
};