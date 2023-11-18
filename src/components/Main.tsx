import '../styles/Main.scss';
import { useApiQuery } from "../services/Api";

function Main() {
	const { data, error } = useApiQuery();

	if (error) {
		return <div>error Test</div>
	}

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div className="main">
			<div className="main-inner">
				<ul>
					<li>test1</li>
					<li>Test2</li>
					<li>Test3</li>
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