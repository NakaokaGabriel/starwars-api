import React from 'react';

import styled from './Filter.module.css';

const Filter: React.FC = () => {
  return (
    <div className={styled.container}>
      <div className={styled.filter}>
        <label htmlFor="column">
          <input type="text" placeholder="Column" id="column" name="column" />
        </label>
      </div>
      <div className={styled.filter}>
        <label htmlFor="comparison">
          <input
            type="text"
            placeholder="Comparison"
            id="comparison"
            name="comparison"
          />
        </label>
      </div>
      <div className={styled.filter}>
        <label htmlFor="value">
          <input type="text" placeholder="Value" id="value" name="value" />
        </label>
      </div>

      <button type="button" className={styled.filter__button}>
        SEARCH
      </button>
    </div>
  );
};

export default Filter;
