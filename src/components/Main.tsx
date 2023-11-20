import '../styles/Main.scss';
import { changDate,
	changeSource,
	changeByline,
	changeHeadline
} from "../utils/ChangeInfo";
import { useApiQuery } from "../services/Api";


function Main() {
	const { data, error } = useApiQuery();
	console.log(data, error);

	if (error) {
		return <div>error Test</div>
	}

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div className="main">
			<div className="main-inner">
				<ul id="card-box">
					<div id="card-items">

					</div>
					{data.response.docs.map((item: any, index: any) => (
						<div key={index} id="card-items">
							<li>
								<div className='item-top'>
									<div className='item-hdline'>
										<p>
											{item.headline.main}
											{/* {changeHeadline(item.headline.main, 10)} */}
										</p>
									</div>
									<div className='item-star-img'>
										<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGJSURBVHgBnZNLcoJAEIaHxz7xBuQEstJyFT1BcgOTraUWN1BPkImvckc8AeUJJDtghScQTxD2vPI3NVgYC0zSVQM93T3fdDcNYzUyGAx0WuyGqLVOVbWyLAug9uri5CrHaDR6AYBJkqQNh8Mu+08mODxJkmQqy7JEOkw2+4tQFljHYj8ej4912ajUOEVRdKR+hxt1WtC1NE2NIgj7GewWwD62gejTATHBer32ZWoeDCYcunBylNFbrVbbArJYLD7wegaIU4y4zMTlVp4Jau6BuIfhNJ/PZ1UpA/Qp1B3Km9KlURTlX01xHCfsdDo7GN/a7XbDdV2b1YgA9Amw2WyCHEKPMqjVakme5zm/BZCc54RzTg2jch6rsoC/idKnZcAFREgTgT6rlgA9vPoNfg6bjiBOCs2FGDIN4NflcmlDP2A93YTgwAPmYS90DtAJYBO2ADb67FeZSIViGMY95uMLakiHMT/v6FNY+JHZBDD6nzSMQ6Psu4DEcdzH4W05oCyI0XBRVwzfWb4BTE/gjBSToccAAAAASUVORK5CYII=" alt="스크랩 별 이미지" />
									</div>
								</div>
								<div className='item-bot'>
									<div className='item-box'>
										<div className='item-source'>
											{changeSource(item.source, 10)}
										</div>
										<div className='item-byline'>
											{changeByline(item.byline, 7)}
										</div>
									</div>
									<p className='item-date'>
										{changDate(item.pub_date)}
									</p>
								</div>
							</li>
							<br />
						</div>
					))}
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
		</div>
	)
}

export default Main;

/**
 * 1. 예제와 같은 박스 css를 만들어준다.
 * 2. 1번을 완료 했으면, apid의 정보들을 넣어준다.
 * 3. map을 사용해서 첫 번째와 같이 넣어준다.
 * 4. 현재 map( ) 작성한 곳에 css수정한 것들을 넣어줌으로써
 * 출력되는 모습이 보이기 시작했다!
 */