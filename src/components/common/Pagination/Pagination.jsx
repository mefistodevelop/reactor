import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

function Pagination({ pageNumber, currentPage, onCurrentPageChange }) {
  const mod = (currentPage === pageNumber) ? 'pagination__button_active' : '';
  return (
    <button
      className={`pagination__button ${mod}`}
      type="button"
      onClick={() => onCurrentPageChange(pageNumber)}
    >
      {pageNumber}
    </button>
  );
}

Pagination.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onCurrentPageChange: PropTypes.func.isRequired,
};

export default Pagination;
