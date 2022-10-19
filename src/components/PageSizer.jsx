import React from 'react'
import { Link } from 'react-router-dom'
import { PAGES } from '../constants'

const PageSizer = ({ sizes = [10], size }) => {
  const currentSize = parseInt(size, 10)

  return <nav>
    <ul className="page-sizer">
      {sizes.map(
        option => <li className="size-item" key={`size-${option}`}>
          <Link
            to={`/${PAGES.LIST}/${option}/1`}
            className={`link ${currentSize === option ? 'active' : ''}`}
            aria-label={`Show ${option} per page`}
            aria-current={currentSize === option}
            title={`Show ${option} per page`}
          >
            {option}
          </Link>
        </li>
      )}
      <li>per page</li>
    </ul>
  </nav>
}

export default PageSizer
