import React from 'react';
import logo from './logo.svg';
import config from './config';
import moment from 'moment'
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Environment <code>{config.env}</code> Loaded at <code>{moment().format('MM/DD hh:mm:ss a')}</code>.</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
