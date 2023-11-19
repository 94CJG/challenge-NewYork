import { useQuery } from "@tanstack/react-query";

export const useApiQuery = () => {
	const { data, error } = useQuery({
		queryKey: ['repoData'],
		queryFn: () =>
			fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=oldest&api-key=h6IwBnNIMxY1EfOVVAeeN0XAFFfKSfQM').then(
				(res) => res.json(),
			),
	});

	return { data, error };
}

export default useApiQuery;