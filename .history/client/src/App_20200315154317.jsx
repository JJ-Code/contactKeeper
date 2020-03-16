import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/layout/Navbar.jsx";
import Alerts from "./components/layout/Alerts";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from '../../utils/setAuthToken';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";



const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Alerts />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
