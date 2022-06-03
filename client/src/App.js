import logo from './logo.svg';
import './App.css';
import Fib from './Fib';
import OtherPage from './OtherPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/other" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
