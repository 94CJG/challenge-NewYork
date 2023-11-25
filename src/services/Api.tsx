import {useInfiniteQuery, useQuery} from "@tanstack/react-query";

export const useApiQuery = () => {
	const { data, error } = useQuery({
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

	return { data, error };
}

export const useInfinityScrollApiQuery = (page:number) => {
	// const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
	// 	queryKey: ["scroll"],
	// 	queryFn: async ({ pageParam = 0 }) => {},
	// 	getNextPageParam: (lastPage, pages) => {},
	// 	initialPageParam:1,
	// })

	return null;
}
// async(page: number)=>{
// 	return await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?
// 			q=glocations:(undefined)page=${page}
// 			&sort=newest
// 			&api-key=r4UFJLWEvtpcSMTJy0ludn1QqafnSyhL`)

export default {useApiQuery ,useInfinityScrollApiQuery};