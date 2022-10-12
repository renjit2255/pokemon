import * as React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

test('Displays the welcome message', () => {
  const welcomeMsg = 'Welcome to pokemon application!'
  render(<App />)
  expect(screen.getByText(welcomeMsg)).toBeInTheDocument()
})
