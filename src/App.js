import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <Menu/>
      <main role="main">
        <Banner/>
      </main>
    </div>
  );
}

export default App;
