import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useApiQuery = () => {
	const { data, error } = useQuery({
		queryKey: ['repoData'],
		queryFn: () =>
			fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=10&sort=oldest&pub_date&api-key=h6IwBnNIMxY1EfOVVAeeN0XAFFfKSfQM').then(
				(res) => res.json(),
			),
	});

	return { data, error };
}

export const Observer = () => {
	useEffect(() => {
		const el = document.getElementById('main-inner');
		console.log(el);
		const observeIntersection = (target: any, callback: any) => {
			console.log(target);
			const observer = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						callback();
					}
				});
			});
			observer.observe(target); 
		};
		const callNextPage = () => {
			let page = 0;
			return () => {
				console.log(page++);
			};
		};
		observeIntersection(el, callNextPage);
	}, []);
}

/**
 * getData
 * getData 세팅
 * 세팅 한 것 랜더링
 * 
 * 마지막 요소 확인 했을 때 -> 여기서부터 막혀있음.
 * 페이지 수 올라가서 다시 
 * 
 * getData 실행 (반복)
 *
 * 
 * //문제1 감시할 대상이 잘못됐음.
 * //마지막 요소: 가져와야함 
 * //Dom을 넣어줘야함.. 
 * //card-items : 이친구 마지막 아이템을 가져와야함.
 * //
 */