import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/search">
            <SearchPage/>
          </Route>
          <Route path = "/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
