import React from 'react'
import './App.css';
import Body from './Components/Body Section/Body';
import Sidebar from './Components/Sidebar Section/Sidebar';

const App = () => {
  return (
    <div className='container'>
    <Sidebar/>
    <Body/>
    </div>
  );
}

export default App
