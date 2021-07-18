import React from 'react';

import styled from './Table.module.css';

import usePlanets from '../../hooks/usePlanets';

const Table = () => {
  const { results } = usePlanets();

  return (
    <div className={styled.container}>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>rotation_period</th>
            <th>orbital_period</th>
            <th>diameter</th>
            <th>climate</th>
            <th>gravity</th>
            <th>terrain</th>
            <th>surface_water</th>
            <th>population</th>
            <th>films</th>
            <th>url</th>
            <th>created</th>
            <th>edited</th>
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
