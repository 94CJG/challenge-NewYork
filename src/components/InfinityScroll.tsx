import {ReactElement, useEffect} from "react";
import {useInfinityScrollApiQuery} from "../services/Api";
import {useInView} from "react-intersection-observer";
import {changDate} from "../utils/ChangeInfo";

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
    const {data, fetchNextPage} = useInfinityScrollApiQuery();

    console.log(data?.pages[0]);

    // ref는 target을 지정할 element에 지정한다.
    //inView type은 boolean으로 root(뷰포트)에 target(ref를 지정한 element)이 들어오면 true로 변환됨
    const { ref, inView } = useInView(
        {threshold: 0.5,});

    useEffect(() => {
        // hasNextPage 다음 페이지가 있는지 여부, Boolean (getNextPageParam 리턴값에 의해서)
        if (inView) {
            // fetchNextPage fetch callback 함수를 실행
            fetchNextPage();
        }
    }, [inView]);

    return (
        <div ref={ref}>
            <div>
                {data?.pages?.map((page, i) => (
                    <div key={i} id="card-items">
                        {page.response.docs.map((itme:any) => (
                            <li>
                                <div className='item-top'>
                                    <div className='item-hdline'>
                                        {/*<p onClick={() => onClick(item)}>*/}
                                        {itme.headline.main}
                                        {/*</p>*/}
                                    </div>
                                    <div className='item-star-img'>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGJSURBVHgBnZNLcoJAEIaHxz7xBuQEstJyFT1BcgOTraUWN1BPkImvckc8AeUJJDtghScQTxD2vPI3NVgYC0zSVQM93T3fdDcNYzUyGAx0WuyGqLVOVbWyLAug9uri5CrHaDR6AYBJkqQNh8Mu+08mODxJkmQqy7JEOkw2+4tQFljHYj8ej4912ajUOEVRdKR+hxt1WtC1NE2NIgj7GewWwD62gejTATHBer32ZWoeDCYcunBylNFbrVbbArJYLD7wegaIU4y4zMTlVp4Jau6BuIfhNJ/PZ1UpA/Qp1B3Km9KlURTlX01xHCfsdDo7GN/a7XbDdV2b1YgA9Amw2WyCHEKPMqjVakme5zm/BZCc54RzTg2jch6rsoC/idKnZcAFREgTgT6rlgA9vPoNfg6bjiBOCs2FGDIN4NflcmlDP2A93YTgwAPmYS90DtAJYBO2ADb67FeZSIViGMY95uMLakiHMT/v6FNY+JHZBDD6nzSMQ6Psu4DEcdzH4W05oCyI0XBRVwzfWb4BTE/gjBSToccAAAAASUVORK5CYII=" alt="스크랩 별 이미지" />
                                    </div>
                                </div>
                                <div className='item-bot'>
                                    <div className='item-box'>
                                        <div className='item-source'>
                                            {itme.headline.source}
                                        </div>
                                        <div className='item-byline'>
                                            {itme.byline.original}
                                        </div>
                                    </div>
                                    <p className='item-date'>
                                        {changDate(itme.pub_date)}
                                    </p>
                                </div>
                            </li>
                        ))}
                        <br />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InfinityScroll;