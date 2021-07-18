import React from 'react';

import styled from './Home.module.css';

import Navigation from '../../components/Navigation';
import Table from '../../components/Table';
import Container from '../../components/Container';

const Home: React.FC = () => {
  return (
    <div className={styled.main}>
      <Navigation />

      <Container>
        <section className={styled.content}>
          <Table />
        </section>
      </Container>
    </div>
  );
};

export default Home;
