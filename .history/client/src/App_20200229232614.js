import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/layout/Navbar.jsx";

const App = ()=>{
  return (
    <Router>
    <div className="App">
      <Navbar />
    </div>
    </Router>
  );
}

export default App;