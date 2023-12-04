import { useEffect, useState } from 'react';
import '../styles/Main.scss';
import { changDate } from "../utils/ChangeInfo";
import { useInfinityScrollApiQuery } from "../services/Api";
import { useInView } from 'react-intersection-observer';

interface IApi {
	item: string[];
	headline: {
		main: string;
	}
	main: string;
	source: string;
	byline: {
		original: string;
	}
	pub_date: string;
	response: any
}


function Main() {
	const { 
		data: infiniteScrollData, 
		fetchNextPage, 
		error 
	} = useInfinityScrollApiQuery();
	const { ref, inView } = useInView({ threshold: 0.4 });
	// const [errorMessage, setErrorMessage] = useState<string | null>(null);
	//구조 분해를 사용 하여 data의 값들을 각각 변경하여 넣어준다.
	//inView : boolean 값으로 해당 요소가 보이면 true를 반환하여 ref요소에 전달하고 다음을 보여준다.
	//threshold는 관찰자의 콜백이 실행되어야 하는 대상의 가시성 백분율을 정희 한 것. 0.4 = 40%가 보이면 inView 값이 true로 설정된다.
	// console.log(apiData);
	console.log(infiniteScrollData);

  useEffect(() => {
    if (error) {
      // API 요청에 실패한 경우
      console.error('Error in useInfinityScrollApiQuery:', error);
      // 사용자에게 에러 메시지 표시
      // setErrorMessage('Failed to fetch data from the API. Please try again later.');

    } else if (inView) {
      // 에러가 없고, 요소가 보이는 경우 다음 페이지를 가져옴
      fetchNextPage();
    }
  }, [inView]);

	const onClick = (itemUrl: any) => {
		return window.open(itemUrl.web_url)
	}

	return (
		<div className="main">
      {!infiniteScrollData ? (
        <div>Loading...</div>
      ) : (
				<>
					<div className="main-inner">
						<ul id="card-box">
							<div>
								{infiniteScrollData?.pages?.map((pages: IApi[]) => {
									return pages.map((item: IApi, i: number) => (
										<div key={i} id="card-items" ref={ref}>
											<li>
												<div className="item-top">
													<div className="item-hdline">
														<p onClick={() => onClick(item)}>{item.headline.main}</p>
													</div>
													<div className="item-star-img">
														<img
															src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGJSURBVHgBnZNLcoJAEIaHxz7xBuQEstJyFT1BcgOTraUWN1BPkImvckc8AeUJJDtghScQTxD2vPI3NVgYC0zSVQM93T3fdDcNYzUyGAx0WuyGqLVOVbWyLAug9uri5CrHaDR6AYBJkqQNh8Mu+08mODxJkmQqy7JEOkw2+4tQFljHYj8ej4912ajUOEVRdKR+hxt1WtC1NE2NIgj7GewWwD62gejTATHBer32ZWoeDCYcunBylNFbrVbbArJYLD7wegaIU4y4zMTlVp4Jau6BuIfhNJ/PZ1UpA/Qp1B3Km9KlURTlX01xHCfsdDo7GN/a7XbDdV2b1YgA9Amw2WyCHEKPMqjVakme5zm/BZCc54RzTg2jch6rsoC/idKnZcAFREgTgT6rlgA9vPoNfg6bjiBOCs2FGDIN4NflcmlDP2A93YTgwAPmYS90DtAJYBO2ADb67FeZSIViGMY95uMLakiHMT/v6FNY+JHZBDD6nzSMQ6Psu4DEcdzH4W05oCyI0XBRVwzfWb4BTE/gjBSToccAAAAASUVORK5CYII="
															alt="스크랩 별 이미지"
														/>
													</div>
												</div>
												<div className="item-bot">
													<div className="item-box">
														<div className="item-source">{item.source}</div>
														<div className="item-byline">{item.byline.original}</div>
													</div>
													<p className="item-date">{changDate(item.pub_date)}</p>
												</div>
											</li>
											<br />
										</div>
									));
								})}
							</div>
						</ul>
					</div>
					<div className="main-bottom-btn">
						<div className='btn-inner'>
							<div className='btn-home'>
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgB7ZRRDYMwFEVfUYCESpgEpEwCEnCwOpgEJCCBOQAHw8HdfQkfS9b2jdJPTnIgoeGkbdKKGAAI9E0XOkgp/NnTGb+MtC2JLUijY/7fWLcv0UKjNyvW4zh9KhZQzvAdaumE8zy0pcEn6jE6fUo9ttpBaaQyV/AKiqxUD7+nHQ37tzSZYzQjcpHCuCtzQZ+ZxP1ocDJW1aaCjbknEZxzG1+vyND6Ac8HSDWRiDtqAAAAAElFTkSuQmCC" alt="하단 홈 버튼" />
								<span>홈</span>
							</div>
							<div className='btn-strap'>
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAkCAYAAAB4+EEtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF/SURBVHgB7Zc9boMwGIY/fg6QG9RH6JotOUHTE6QdK0DhCOkNqPgRYxi7tScobGzNEXwEumXgp68rqlaV0wRiMkQ8UmQHCz/6MK+RNQKu607qunbRXTZNw0gdXNO0RNd1DxRaK3qD5JoGAsIthHNTVPQtQrvGQErqWOD3NX9ZlisTf5btgBcEwSOpJbNtu0ABoog7/dcavdAwZG3LdDojo0wJpuwisseqqnpHd0Ld4bj3Noqi7d8BaWXIBOspEjDTNK9kA9LKkLfUcZwZ9QBVfciq2isT+L6fkWL2ypD8FfV4lNgkeBiGydEyiBbYXjzqAe4jy7JIJpTKsMApXpKU+skKrJt0CaQy8e1BMyfFjKHuwhjqHw6FGo86ieOY06myY0JtGAZDc0+nyg6FWgQX29ITdeRyQz3KRtn/MmSGiw5yM6MBwPw3bZeLI9OmPWWssflOIH0lReBMNsN84pApitmc9TBo5Hm+m06nzxDucIFR/++YDI4iPOyjD2JX+gTZW83NRadL/wAAAABJRU5ErkJggg==" alt="하단 스크랩 버튼" />
								<span>스크랩</span>
							</div>
						</div>
					</div>
				</>
			)
			}
		</div >
	)
}
export default Main


/**
 *
 */
// 별 스크랩 불 들어옴.
// data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEMSURBVHgBnVPBEQExFH1Z7uhgVWBLWEfjpAMqUAI6oJI9GcNFC3SQDjgxDsTbbKyEleDNZPYlP3n/7c8P4IHaIFFLJAig7o3ekKEGSdb1bYs+BdQKQ35ijpQ8xT8iEJhU8m9FLBcPeN0IXbiIo4YGa5AXMWHmGArNF2dHru3IJLnEFXvOpehjV+fhTGe92Vaq7GnRtIwX/yA52hEXumbyK6Q5S2PQNYjJtnDrEBQQvSK5KN1+L+QI5ChvRy8qzBCCwNQWcETMrIMQ1PsziEIbKhD7RYQlkvcFrVN4BPf23hI9C7tlH1xw0IeBOU5YiIHmRXzN1lemk89o2THYInz6Y5W9dKq9hzdonoSDO1SEV6rCCnXcAAAAAElFTkSuQmCC