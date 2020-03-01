import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/layout/Navbar.jsx";

const App = ()=>{
  return (
    <Router>
      <Fragment>
        <Navbar />
    <div className="container">
      <Switch>
        <Route>
          
        </Route>
      </Switch>
    </div>
      </Fragment>
    </Router>
  );
}

export default App;
