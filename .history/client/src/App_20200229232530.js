import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from "./components/layout/Navbar.jsx";

const App = ()=>{
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
