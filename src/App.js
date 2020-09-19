import React from 'react';
import SideBar from './SideBar'
import Chat from './Chat'
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
