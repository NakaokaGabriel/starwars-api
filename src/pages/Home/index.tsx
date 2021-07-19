import React from 'react';
import { MdSearch } from 'react-icons/md';

import styled from './Home.module.css';

import Navigation from '../../components/Navigation';
import Table from '../../components/Table';
import Container from '../../components/Container';
import Filter from '../../components/Filter';

const Home: React.FC = () => {
  // TODO
  // filtro de nome do planeta
  // filtro por coluna exemplo o nome da coluna a qual apertar sera filtrado
  // filtro de comparação
  // filtro de valor
  // remover uns dos filtros de coluna

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
              />
            </label>
          </div>
          <div className={styled.content__header}>
            <Filter />
          </div>
        </Container>

        <Container>
          <Table />
        </Container>
      </section>
    </div>
  );
};

export default Home;
