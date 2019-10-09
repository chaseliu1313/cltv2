import React from 'react';
import './App.css';
import Menu from './Component/menuBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Menu />
        </header>
      </div>
    </Router>
  );
}

export default App;
