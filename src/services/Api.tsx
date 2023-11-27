import { useInfiniteQuery, useQuery, } from "@tanstack/react-query";
import { useEffect } from "react";

export const useApiQuery = () => {
	const { data: apiData, error, refetch } = useQuery({
		queryKey: ['repoData'],
		queryFn: () =>
			fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?' +
				'q=new+york+times&page=10' +
				'&sort=oldest' +
				'&pub_date' +
				'&api-key=h6IwBnNIMxY1EfOVVAeeN0XAFFfKSfQM').then(
				(res) => res.json(),
			),
	});

	useEffect(() => {
		const handleActivateQuery = () => {
			refetch();
		};
		handleActivateQuery();
	}, []);
	return { data: apiData, error };
}

export const useInfinityScrollApiQuery = () => {
	const { data: infiniteScrollData, fetchNextPage } = useInfiniteQuery({
		//useQuery와 사용법은 같은데, useApiQuery()에서 값을 사용 할 수는 없을까..?
		//fetchNextPage -> 새로운 페이지의 데이터를 가져오기 위해 사용되는 함수
		queryKey: ["scrolls"],
		queryFn: async ({ pageParam = 0 }) => {
			return await fetch(
				`https://api.nytimes.com/svc/search/v2/articlesearch.json?
			q=glocations:(undefined)page=${pageParam}
			&sort=newest
			&api-key=r4UFJLWEvtpcSMTJy0ludn1QqafnSyhL`
			).then((res) => res.json());
		},
		getNextPageParam: (lastPage, allPages) => {
			if (allPages.length <= 2) {
				return allPages.length;
			}
			console.log(allPages.length);
			return allPages.length + 1;
		},
		initialPageParam: 0,
		//initialPageParam 사용할 페이지 번호를 설정하는 데 사용되는 프로퍼티.
		//initialPageParam 초기 페이지를 설정해주고, 값을 설정을 해주지 않으면 undefined가 사용되어
		//initialPageParam 첫 번째 호출 시에 pageParam이 undefined로 전달된다.
	});
	return { data: infiniteScrollData, fetchNextPage }
};