import React, { createContext, useEffect, useState } from 'react';

import { api } from '../services/api';

export type PlanetItem = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  url: string;
  films: string[];
  created: Date;
  edited: Date;
};

export type PlanetData = {
  count: number | undefined;
  previous: string | undefined;
  next: string | undefined;
  results: PlanetItem[] | undefined;
  // filterByName?: string;
};

export const PlanetsProvider = createContext<PlanetData>({} as PlanetData);

type PlanetsContextProps = {
  children: React.ReactNode;
};

const PlanetsContext = ({ children }: PlanetsContextProps) => {
  const [data, setData] = useState<PlanetData>();

  useEffect(() => {
    async function loadPlanets() {
      const response = await api.get('/planets');

      setData(response.data);
    }

    loadPlanets();
  }, []);

  return (
    <PlanetsProvider.Provider
      value={{
        count: data?.count,
        previous: data?.previous,
        next: data?.next,
        results: data?.results
      }}
    >
      {children}
    </PlanetsProvider.Provider>
  );
};

export default PlanetsContext;
