import React from 'react';

import styled from './Table.module.css';

import usePlanets from '../../hooks/usePlanets';

const Table = () => {
  const { results } = usePlanets();

  return (
    <div className={styled.container}>
      <table className={styled.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Url</th>
            <th>Created</th>
            <th>Edited</th>
          </tr>
        </thead>

        <tbody>
          {results?.map((planet) => (
            <tr key={planet.name}>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films.map((film) => film)}</td>
              <td>{planet.url}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
