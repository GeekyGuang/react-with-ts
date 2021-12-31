import React from 'react';
import './App.css';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import LogButtonClicks from './components/LogButtonClicks';

function App() {
  return (
    <div className="App">

      <MouseTracker />
      <LogButtonClicks />
    </div>
  );
}

export default App;
