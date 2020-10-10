import React from 'react';
import './App.css';
import Chat from './features/Chat';
import Sidebar from './features/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Chat/>
    </div>
  );
}

export default App;
