import {ReactElement, useEffect} from "react";
import {useInfinityScrollApiQuery} from "../services/Api";
import {useInView} from "react-intersection-observer";
import {useInfiniteQuery} from "@tanstack/react-query";

interface UseInfiniteQueryWithScrollParamsTypes {
    currentSearchType: any;
    queryString: any;
}

interface UseInfiniteQueryWithScrollReturnTypes {
    data: any;
    error: any;
    isFetching: any;
    ObservationComponent: () => ReactElement;
}


/**
 * 사용 기술
 * Recat query: useInfiniteQuery (https://react-query.tanstack.com/guides/infinite-queries)
 * react-intersection-observer: useInView
 */

function InfinityScroll() {
    // const { data } = useInfinityScrollApiQuery(1);

    // ref는 target을 지정할 element에 지정한다.
    //inView type은 boolean으로 root(뷰포트)에 target(ref를 지정한 element)이 들어오면 true로 변환됨
    const { ref, inView } = useInView({});

    // useEffect(() => {
    //     // hasNextPage 다음 페이지가 있는지 여부, Boolean (getNextPageParam 리턴값에 의해서)
    //     if (inView) {
    //         // fetchNextPage fetch callback 함수를 실행
    //         fetchNextPage();
    //     }
    // }, [inView]);

    return (
        <div ref={ref}>
            지구최
        </div>
    )
}

export default InfinityScroll;