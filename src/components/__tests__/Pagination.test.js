import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Pagination from '../Pagination'

describe('<Pagination />', () => {
  const totalCount = 60,
    pageSize = 20

  it('renders pagination without errors', async () => {
    render(
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={2}
      />,
      { wrapper: BrowserRouter }
    )
    expect(screen.queryByRole('navigation')).toBeInTheDocument()
    expect(screen.queryByRole('list')).toBeInTheDocument()
    expect(screen.queryAllByRole('listitem')).toHaveLength(2)
    expect(screen.queryAllByRole('link')).toHaveLength(2)
  })
  it('renders pagination correctly for the first page', async () => {
    render(
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={1}
      />,
      { wrapper: BrowserRouter }
    )
    expect(screen.queryAllByRole('link')).toHaveLength(1)
    expect(screen.queryByRole('link')).toHaveTextContent('Next')
  })

  it('renders pagination correctly for the last page', async () => {
    render(
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={3}
      />,
      { wrapper: BrowserRouter }
    )
    expect(screen.queryAllByRole('link')).toHaveLength(1)
    expect(screen.queryByRole('link')).toHaveTextContent('Previous')
  })
})
