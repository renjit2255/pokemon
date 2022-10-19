import * as React from 'react'
import { render, screen } from '@testing-library/react'
import PokemonList from '../PokemonList'
import { getPokeList as mockGetPokeList } from '../../api/pokemonService'

jest.mock('../../api/pokemonService')
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    pageNumber: 0,
    limit: 20
  })
}))
jest.mock('../../components', () => ({
  ...jest.requireActual('../../components'),
  Pagination: () => <div>Pagination</div>,
  PageSizer: () => <div>Page Sizer</div>
}))

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
    expect(await screen.findByRole('list')).toBeInTheDocument()
    expect(await screen.findAllByRole('listitem')).toHaveLength(2)
    expect(mockGetPokeList).toHaveBeenCalledTimes(1)
  })
})
