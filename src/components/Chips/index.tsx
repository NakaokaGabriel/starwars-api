import React from 'react';
import {
  MdKeyboardArrowRight,
  MdClose,
  MdKeyboardArrowLeft
} from 'react-icons/md';
import { FaEquals } from 'react-icons/fa';

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
      return <MdKeyboardArrowLeft size={22} color="#F5F5F7" />;
    }
    case 'moreThan': {
      return <MdKeyboardArrowRight size={22} color="#F5F5F7" />;
    }
    case 'equalThan': {
      return <FaEquals size={22} color="#F5F5F7" />;
    }
  }
};

const Chips = ({ name, comparison, value }: ChipsProps) => {
  const { setFilters, filters } = usePlanets();

  const handleDelete = (name: string) => {
    const removeFilter = filters.filter((filter) => filter.name !== name);

    setFilters([...removeFilter]);
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
