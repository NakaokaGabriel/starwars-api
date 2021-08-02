import React, { ChangeEvent } from 'react';
import { MdSearch } from 'react-icons/md';

import styled from './Home.module.css';

import usePlanets from '../../hooks/usePlanets';

import Container from '../../components/Container';
import Navigation from '../../components/Navigation';
import Filter from '../../components/Filter';
import Chips from '../../components/Chips';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';

const Home: React.FC = () => {
  const { setSearch, filters, setFilters } = usePlanets();

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setFilters({
      filters: {
        filterByName: {
          name: event.target.value
        },
        filterByNumericValues: [...filters.filters.filterByNumericValues]
      }
    });
  };

  return (
    <div className={styled.main}>
      <Navigation />

      <section className={styled.content}>
        <Container>
          <div className={styled.content__search}>
            <div className={styled.header__title}>
              <h1>Search Planets </h1>
              <h2>and your favorite character</h2>
            </div>

            <label htmlFor="search">
              <button className="search__icon">
                <MdSearch color="#F5F5F7" size={20} />
              </button>
              <input
                type="text"
                placeholder="Search by Name"
                id="search"
                name="search"
                onChange={inputChange}
              />
            </label>
          </div>

          <Filter />

          {filters.filters &&
            filters.filters.filterByNumericValues.map((chip) => (
              <Chips
                key={chip.name}
                name={chip.name}
                comparison={chip.comparison}
                value={chip.value}
              />
            ))}

          <Table />
          <Pagination />
        </Container>
      </section>
    </div>
  );
};

export default Home;
