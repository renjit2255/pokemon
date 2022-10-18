import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PokemonCard from '../PokemonCard'
import { getPokeDetail as mockGetPokeDetail } from '../../api/pokemonService'

jest.mock('../../api/pokemonService')
jest.mock('../Abilities', () => () => <div>Abilities</div>)
describe('PokemonCard', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })

  it('renders pokemon card without errors', async () => {
    const name = 'bulbasaur',
      pokemon = {
        name,
        height: '12',
        weight: '23',
        abilities: []
      }
    mockGetPokeDetail.mockResolvedValue({
      data: pokemon
    })
    render(<PokemonCard pokemon={pokemon} />, { wrapper: BrowserRouter })
    expect(screen.queryByRole('progressbar')).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
    })
    expect(screen.queryByRole('listitem')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent(name)
    expect(screen.getByText(/Abilities/i)).toBeInTheDocument()
  })
})
