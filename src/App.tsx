import { BrowserRouter as Router, Route, } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import './styles/Styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
// 스타일 컴포넌트를 이용하여 css 변경하기
// App 안 div를 flex를 주면 예제와 같이 동일하게 만들 수 있음.