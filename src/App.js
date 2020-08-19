import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Text } from './Text';
import someText from './Text';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I already Edited <code>src/App.js</code> and save to reload.
        </p>
        <Text title={someText} />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
