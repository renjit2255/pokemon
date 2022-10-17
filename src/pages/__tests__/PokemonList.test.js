import * as React from 'react'
import { render, screen } from '@testing-library/react'
import PokemonList from '../PokemonList'
import { getPokeList as mockGetPokeList } from '../../api/pokemonService'

jest.mock('../../api/pokemonService')

describe('PokemonList', () => {
  it('renders all the retrieved pokemons', async () => {
    mockGetPokeList.mockResolvedValue({
      data: {
        next: '',
        previous: '',
        results: [
          { name: 'pokemon1', url: 'url1' },
          { name: 'pokemon2', url: 'url2' },
        ],
      }
    })
    expect.assertions(3)
    render(<PokemonList />)
    expect(await screen.findByRole(/list/i)).toBeInTheDocument()
    expect(await screen.findAllByRole(/listitem/i)).toHaveLength(2)
    expect(mockGetPokeList).toHaveBeenCalledTimes(1)
  })
})
