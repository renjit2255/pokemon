import * as React from 'react'
import { render, screen } from '@testing-library/react'
import PokemonCard from '../PokemonCard'

describe('PokemonCard', () => {
  it('renders pokemon card without errors', () => {
    const name = 'bulbasaur',
      pokemon = {
        name
      }
    render(<PokemonCard pokemon={pokemon} />)
    expect(screen.getByRole('listitem')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent(name)
  })
})
