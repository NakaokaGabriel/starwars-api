import React from 'react';

import styled from './Navigation.module.css';

import logo from '../../assets/star-wars.svg';

const Navigation: React.FC = () => {
  return (
    <nav className={styled.navigation}>
      <img src={logo} alt="Star Wars logo" />

      <div className={styled.description}>
        <span>Search you favorite character</span>
      </div>
    </nav>
  );
};

export default Navigation;
