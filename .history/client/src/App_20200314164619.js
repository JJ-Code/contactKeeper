import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import ContactState from "./context/contact/ContactState";
import AState from "./context/auth/AuthState";


const App = () => {
  return (
    <Auth
    <ContactState>
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
    </ContactState>
  );
}

export default App;
