import React from 'react';

import styled from './Pagination.module.css';

import usePlanets from '../../hooks/usePlanets';

const Pagination = () => {
  const { page, setPage, previous, next } = usePlanets();

  const handlePrevPage = () => {
    previous && setPage(page - 1);
  };

  const handleNextPage = () => {
    next && setPage(page + 1);
  };

  return (
    <div className={styled.pagination}>
      <div className={styled.pagination__pages}>
        <strong>Page</strong>
        <span className={styled.actual}>{page}</span>
      </div>

      <div className={styled.pagination__actions}>
        <button
          onClick={handlePrevPage}
          type="button"
          className={previous ? styled.prev : styled.disabled}
          disabled={!previous}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          type="button"
          className={next ? styled.next : styled.disabled}
          disabled={!next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
