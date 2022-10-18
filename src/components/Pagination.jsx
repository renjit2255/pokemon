import React from 'react'
import { Link } from 'react-router-dom'
import usePagination from '../hooks/usePagination'
import { PAGES } from '../constants'
import './Pagination.css'

const Pagination = ({
  totalCount,
  currentPage,
  pageSize
}) => {
  const paginationRange = usePagination({
      totalCount,
      pageSize
    }),
    pageNumber = parseInt(currentPage, 10) || 1

  return (
    <nav role="navigation" aria-label="Pagination navigation">
      <ul className="pagination-container">
        <li
          className="pagination-item"
          aria-disabled={pageNumber === 0}
        >
          {pageNumber > 1
            ? <Link
              to={`/${PAGES.LIST}/${pageSize}/${pageNumber - 1}`}
              className="link"
              aria-label="Goto previous page"
            >
              Previous
            </Link>
            : 'Previous'
          }
        </li>
        <li
          className="pagination-item"
        >
          {paginationRange[1] > pageNumber
            ? <Link
              to={`/${PAGES.LIST}/${pageSize}/${pageNumber + 1}`}
              className="link"
              aria-label="Goto next page"
            >
              Next
            </Link>
            : 'Next'
          }
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
