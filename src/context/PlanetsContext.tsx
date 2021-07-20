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

type NumericFilterType = {
  name: string;
  comparison: string;
  value: string;
};

type FilterType = {
  filters: {
    filterByName: {
      name: string;
    };
    filterByNumericValues: NumericFilterType[];
  };
};

export type PlanetDataContext = {
  count: number | undefined;
  previous: string | undefined;
  next: string | undefined;
  results: PlanetItem[] | undefined;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
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
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: ''
      },
      filterByNumericValues: []
    }
  } as FilterType);

  useEffect(() => {
    async function loadPlanets() {
      const response = await api.get<PlanetDataReturn>(`/planets`, {
        params: {
          page: page
        }
      });

      const lowerSearch = search.toLocaleLowerCase();
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const searchResult = response.data.results!.filter((planet) =>
        planet.name.toLowerCase().includes(lowerSearch)
      );

      // function loadPopulation(value: string, comparison: string) {
      //   if (comparison === 'lessThan') {
      //     return searchResult.filter((planetResult) => {
      //       return parseInt(planetResult.population) <= parseInt(value);
      //     });
      //   }

      //   if (comparison === 'greaterThan') {
      //     return searchResult.filter((planetResult) => {
      //       return planetResult.population >= value;
      //     });
      //   }

      //   if (comparison === 'equalThan') {
      //     return searchResult.filter((planetResult) => {
      //       return planetResult.population === value;
      //     });
      //   }
      // }

      // const planetFilter = filters.filters.filterByNumericValues.map(
      //   (filterResult) => {
      //     return loadPopulation(filterResult.value, filterResult.comparison);
      //   }
      // );

      setData({
        ...response.data,
        results: searchResult
      });
    }

    loadPlanets();
  }, [page, search, filters]);

  return (
    <PlanetsProvider.Provider
      value={{
        count: data?.count,
        previous: data?.previous,
        next: data?.next,
        results: data?.results,
        page: page,
        setPage,
        search,
        setSearch,
        filters,
        setFilters
      }}
    >
      {children}
    </PlanetsProvider.Provider>
  );
};

export default PlanetsContext;
