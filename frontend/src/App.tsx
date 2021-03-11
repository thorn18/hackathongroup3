import logo from './logo.svg';
import './App.css';
import RouterComponent from './components/router.component';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import HomeComponent from './components/homeComponent';

function App() {
  return (
    <BrowserRouter>
      <RouterComponent></RouterComponent>
      <HomeComponent></HomeComponent>
    </BrowserRouter>
  );
}

export default App;
