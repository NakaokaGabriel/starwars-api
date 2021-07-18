import { useContext } from 'react';

import { PlanetsProvider } from '../context/PlanetsContext';

const usePlanets = () => {
  const context = useContext(PlanetsProvider);

  if (!context) {
    throw new Error('PlanetsProvider does not passed');
  }

  return context;
};

export default usePlanets;
