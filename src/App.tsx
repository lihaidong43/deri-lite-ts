import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Trade from './features/trade/Trade';
import Positions from './features/positions/Positions';

function App() {
  return (
    <div className="App">      
      <Trade/>
      <Positions/>
    </div>
  );
}

export default App;
