import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi👋 I'm Qichen Liu (刘启辰).
        </p>
        <div className="social-links">
          <a href="https://github.com/q1chenl" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://x.com/qichen404" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={30} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;