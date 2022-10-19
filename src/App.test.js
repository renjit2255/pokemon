import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

it('Displays the welcome message', () => {
  const welcomeMsg = 'Pokemon'
  render(<App />)
  expect(screen.getByText(welcomeMsg)).toBeInTheDocument()
})
