import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PokemonCard from '../PokemonCard'

describe('PokemonCard', () => {
  it('renders pokemon card without errors', async () => {
    const name = 'bulbasaur',
      pokemon = {
        name
      }
    render(
      <BrowserRouter>
        <PokemonCard pokemon={pokemon} />
      </BrowserRouter>
    )
    expect(screen.queryByRole('progressbar')).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })
    expect(screen.queryByRole('listitem')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent(name)
  })
})
