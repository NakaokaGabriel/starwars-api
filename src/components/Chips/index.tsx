import React from 'react';
import { MdClose } from 'react-icons/md';

import styled from './Chips.module.css';
import usePlanets from '../../hooks/usePlanets';

type ChipsProps = {
  name: string;
  comparison: string;
  value: string;
};

const comparisonModifier = (comparison: string) => {
  switch (comparison) {
    case 'lessThan': {
      return <p className={styled.comparison}>{`<`}</p>;
    }
    case 'moreThan': {
      return <p className={styled.comparison}>{`>`}</p>;
    }
    case 'equalThan': {
      return <p className={styled.comparison}>{`=`}</p>;
    }
  }
};

const Chips = ({ name, comparison, value }: ChipsProps) => {
  const { setFilters, filters, search } = usePlanets();

  const handleDelete = (name: string) => {
    const removeFilter = filters.filters.filterByNumericValues.filter(
      (filter) => filter.name !== name
    );

    setFilters({
      filters: {
        filterByName: {
          name: search
        },
        filterByNumericValues: [...removeFilter]
      }
    });
  };

  return (
    <div className={styled.chips}>
      <div className={styled.chips__container}>
        <span className={styled.column}>{name}</span>
        {comparisonModifier(comparison)}
        <span className="number">{value}</span>
        <button type="button" onClick={() => handleDelete(name)}>
          <MdClose size={16} color="#212025" />
        </button>
      </div>
    </div>
  );
};

export default Chips;
