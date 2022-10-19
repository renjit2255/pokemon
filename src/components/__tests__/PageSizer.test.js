import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PageSizer from '../PageSizer'

describe('<PageSizer />', () => {
  it('renders page sizer without errors', async () => {
    render(
      <PageSizer sizes={[10, 20, 50]} size={50} />,
      { wrapper: BrowserRouter }
    )
    expect(screen.queryAllByRole('link')).toHaveLength(3)
    const link = screen.queryByRole('link', { current: true })
    expect(link).toHaveTextContent('50')
    expect(link).toHaveClass('active')
  })
})
