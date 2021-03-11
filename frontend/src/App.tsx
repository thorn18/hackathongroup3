import logo from './logo.svg';
import './App.css';
import RouterComponent from './components/router.component';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <RouterComponent></RouterComponent>
    </BrowserRouter>
  );
}

export default App;
