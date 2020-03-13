import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Components/Users/Users';
import Suggestions from './Components/Suggestions/Suggestions';

function App() {
  return (
    <div>
      <h1 className="headline">Users' Page</h1>
      <Suggestions></Suggestions>
    </div>
  );
}

export default App;
