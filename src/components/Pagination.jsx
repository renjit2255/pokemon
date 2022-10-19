import React from 'react'
import { Link } from 'react-router-dom'
import usePagination from '../hooks/usePagination'
import { PAGES } from '../constants'

const Pagination = ({
  totalCount,
  currentPage,
  pageSize
}) => {
  const paginationRange = usePagination({
      totalCount,
      pageSize
    }),
    pageNumber = parseInt(currentPage, 10) || 1,
    prevPage = pageNumber - 1,
    nextPage = pageNumber + 1

  return (
    <nav role="navigation" aria-label="Pagination navigation">
      <ul className="pagination-container">
        <li
          className="pagination-item"
          aria-disabled={pageNumber === 0}
        >
          {pageNumber > 1
            ? <Link
              to={`/${PAGES.LIST}/${pageSize}/${prevPage}`}
              className="link"
              aria-label={`Go to page ${prevPage}`}
              title={`Go to page ${prevPage}`}
              rel="Previous"
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
              rel="next"
              aria-label={`Go to page ${nextPage}`}
              title={`Go to page ${nextPage}`}
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
