/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import Select from 'react-select';

import styled from './Filter.module.css';

import usePlanets from '../../hooks/usePlanets';

type Optiontype = {
  value: string;
  label: string;
};

const Filter: React.FC = () => {
  const { setFilters, filters } = usePlanets();

  const [name, setName] = useState<string>('');
  const [comparison, setComparison] = useState<string>('');
  const [value, setValue] = useState('');

  const [nameOption, setNameOption] = useState<Optiontype[]>([
    {
      value: 'population',
      label: 'Population'
    },
    {
      value: 'orbital_period',
      label: 'Orbital Period'
    },
    {
      value: 'diameter',
      label: 'Diameter'
    },
    {
      value: 'rotation_period',
      label: 'Rotation Period'
    },
    {
      value: 'surface_water',
      label: 'Surface Water'
    }
  ]);

  const [comparisonOption] = useState<Optiontype[]>([
    {
      value: 'lessThan',
      label: 'Less Than'
    },
    {
      value: 'moreThan',
      label: 'More Than'
    },
    {
      value: 'equalThan',
      label: 'Equal'
    }
  ]);

  const handleClick = () => {
    const existName =
      filters.filters &&
      filters.filters.filterByNumericValues.find(
        (filter) => filter.name === name
      );
    const removeName = nameOption.filter((option) => option.value !== name);

    if (
      !existName &&
      name.length > 0 &&
      comparison.length > 0 &&
      value.length >= 1 &&
      filters.filters
    ) {
      setFilters({
        filters: {
          filterByName: {
            name
          },
          filterByNumericValues: [
            ...filters.filters.filterByNumericValues,
            {
              name,
              comparison,
              value
            }
          ]
        }
      });

      setNameOption([...removeName]);
    }
  };

  const selectStyle = {
    control: (styles: any) => ({
      ...styles,
      width: '100%',
      height: '100%',
      backgroundColor: 'none',
      border: 'none'
    }),
    option: (styles: any) => ({
      ...styles,
      width: '100%',
      height: '100%',
      border: 'none'
    }),
    placeholder: (styles: any) => ({
      ...styles,
      width: '100%',
      color: '#fff',
      border: 'none'
    }),
    singleValue: (styles: any) => ({
      ...styles,
      width: '100%',
      color: '#fff',
      border: 'none'
    })
  };

  return (
    <div className={styled.container}>
      <div className={styled.filter}>
        <label htmlFor="column">
          <Select
            options={nameOption}
            styles={selectStyle}
            onChange={(event) => setName(event ? event.value : '')}
          />
        </label>
      </div>
      <div className={styled.filter}>
        <label htmlFor="comparison">
          <Select
            options={comparisonOption}
            styles={selectStyle}
            onChange={(event) => setComparison(event ? event.value : '')}
          />
        </label>
      </div>
      <div className={styled.filter}>
        <label htmlFor="value">
          <input
            type="text"
            placeholder="Value"
            id="value"
            name="value"
            onChange={(event) => setValue(event.target.value)}
          />
        </label>
      </div>

      <button
        type="button"
        onClick={handleClick}
        className={styled.filter__button}
      >
        SEARCH
      </button>
    </div>
  );
};

export default Filter;
