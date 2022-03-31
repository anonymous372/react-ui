import React from 'react';
import './App.css';


// Importing Components
import Sidebar from './components/Sidebar/Sidebar';

import Leads from './components/Leads/Leads';
import Danger from './components/Danger/Danger';

import Income from './components/Income/Income';
import Meetings from './components/Meetings/Meetings';

function App() {
  return (
    
    <div id="app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className='content'>
        <div className='left-cont'>
          <Leads />
          <Danger />
        </div>
        <div className='right-cont'>
          <Income />
          <Meetings />
        </div>
      </div>
    </div>
  );
}

export default App;
