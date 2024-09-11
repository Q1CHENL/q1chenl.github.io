import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi👋 I'm Qichen Liu (刘启辰)
        </p>
        <div className="social-links">
          <a href="https://github.com/q1chenl" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://x.com/qichen404" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
