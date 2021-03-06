import React from 'react';

import './styles/global.css';

import Routes from './routes';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

export default App;