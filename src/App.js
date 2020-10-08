// App.jsx

import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects.js';
import About from './components/About.js';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Projects} />
          <Route path="/about" component={About} />

          <div className="navigation">
            <img src={logo} className="logo-image" alt="Logo Image" />
            <div className="navigation-sub">
              <Link to="/" className="item">Projects</Link>
              <Link to="/about" className="item">About</Link>
            </div>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;