import React from "react";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = ({ pagesCount, currentPage, onPageChange }) => {

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="flex gap-2 justify-center">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`py-2 px-3 rounded-lg ${
                page === currentPage ? "bg-[#320307] text-white" : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pagesCount: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};

export default Pagination;
