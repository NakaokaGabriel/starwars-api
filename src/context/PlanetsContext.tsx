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

export type PlanetDataContext = {
  count: number | undefined;
  previous: string | undefined;
  next: string | undefined;
  results: PlanetItem[] | undefined;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const PlanetsProvider = createContext<PlanetDataContext>(
  {} as PlanetDataContext
);

type PlanetsContextProps = {
  children: React.ReactNode;
};

type PlanetDataReturn = {
  count: number | undefined;
  previous: string | undefined;
  next: string | undefined;
  results: PlanetItem[] | undefined;
};

const PlanetsContext = ({ children }: PlanetsContextProps) => {
  const [data, setData] = useState<PlanetDataReturn>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadPlanets() {
      const response = await api.get(`/planets`, {
        params: {
          page: page
        }
      });

      setData(response.data);
    }

    loadPlanets();
  }, [page]);

  return (
    <PlanetsProvider.Provider
      value={{
        count: data?.count,
        previous: data?.previous,
        next: data?.next,
        results: data?.results,
        page: page,
        setPage: setPage
      }}
    >
      {children}
    </PlanetsProvider.Provider>
  );
};

export default PlanetsContext;
