import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1>App js</h1>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
