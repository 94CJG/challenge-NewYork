import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {useEffect} from "react";


export const useApiQuery = () => {
	const { data, error, refetch } = useQuery({
		enabled: false,
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
	return { data, error };
}


export const useInfinityScrollApiQuery = () => {
	const {data, fetchNextPage} = useInfiniteQuery<any>({
		queryKey: ["scrolls"],
		queryFn: async({pageParam})=>{
			return await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?
			q=glocations:(undefined)page=${pageParam}
			&sort=newest
			&api-key=r4UFJLWEvtpcSMTJy0ludn1QqafnSyhL`).then((res)=>res.json());
		},
		getNextPageParam: (lastPage) => {
			return lastPage+=1;
		},
		initialPageParam: 0,
	});

	return {data, fetchNextPage};
}

export default {useApiQuery ,useInfinityScrollApiQuery};
