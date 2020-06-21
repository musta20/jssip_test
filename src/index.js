import React from 'react';
import ReactDOM from 'react-dom';
import Testme from './componant/testme';
import Mainnav from "./componant/mainnav";
import Sing from "./componant/Sing";
import "./App.css";
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
   
   <Router>
      <div>
        <nav>
          <ul>
       
            <li>
              <Link to="/">Testme</Link>
            </li>
            <li>
              <Link to="/Sing">Sing</Link>
            </li>
            <li>
              <Link to="/Mainnav">Mainnav</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        
          <Route path="/Mainnav">
            <Mainnav></Mainnav>
          </Route>
          
          <Route path="/Sing">
            <Sing></Sing>
          </Route>
          <Route path="/">
           <Testme></Testme>
          </Route>
        </Switch>
      </div>
    </Router>
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
