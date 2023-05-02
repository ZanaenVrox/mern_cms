import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  // Generate an array of page numbers based on total pages
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleNextClick = (page) => {
    onPageChange(page);
  };
  const handlePreviousClick = (page) => {
    onPageChange(page);
  };

  return (
    <>
      <nav aria-label="..." style={{ display: "flex", justifyContent: "end" }}>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <Link
              className="page-link"
              tabIndex={-1}
              onClick={() => handlePreviousClick(currentPage - 1)}
            >
              <i className="fas fa-angle-left" />
            </Link>
          </li>
          <li className={"page-item active"}>
            <Link className="page-link" to="#">
              {currentPage}
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li
            className={`page-item ${
              currentPage === pageNumbers.length ? "disabled" : ""
            }`}
          >
            <Link
              className="page-link"
              onClick={() => handleNextClick(currentPage + 1)}
            >
              <i className="fas fa-angle-right" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
