import React from 'react';
import './App.css';
import Menu from './Component/menuBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
      </div>
    </Router>
  );
}

export default App;
