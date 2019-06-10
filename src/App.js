import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <div>BaseCamp</div>
      <Router>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
