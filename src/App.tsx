import React from 'react';
import './styles/global.css';

import PlanetsContext from './context/PlanetsContext';

import Home from './pages/Home';

function App() {
  return (
    <PlanetsContext>
      <Home />
    </PlanetsContext>
  );
}

export default App;
