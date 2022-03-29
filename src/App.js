import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Admin from './components/Admin';
import {useSelector} from "react-redux"


function App() {
  let user = useSelector(state=> state.auth)
  return (
    <div className="App">
      <h1>App js</h1>
        <Router>
          <Switch>
            
            {
              user ? 
                <>
                  <Route exact path="/admin" component={Admin} /> 
                  <Redirect to="/admin"/>
                </>
              :
              <>
                <Route exact path="/login" component={Login} />
                <Redirect to="/login"/>
              </>
            }
          </Switch>
      </Router>
    </div>
  );
}

export default App;
