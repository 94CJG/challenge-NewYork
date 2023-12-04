import { BrowserRouter as Router, Route, } from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import './styles/Styles.scss';

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;