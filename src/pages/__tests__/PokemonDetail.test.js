import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PokemonDetail from '../PokemonDetail'
import { getPokeDetail as mockGetPokeDetail } from '../../api/pokemonService'

const mockGoBack = jest.fn()

jest.mock('../../api/pokemonService')
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    name: 'ivysaur'
  }),
  useHistory: () => ({
    goBack: mockGoBack
  })
}))

describe('<PokemonDetail />', () => {
  afterAll(() => {
    jest.clearAllMocks()
  })
  it('render the pokemon details', async () => {
    mockGetPokeDetail.mockResolvedValue({
      data: { name: 'ivysaur', height: 12, weight: 130 }
    })
    render(<PokemonDetail />)
    expect(screen.queryByRole(/progressbar/i)).toBeInTheDocument()
    expect(await screen.findByText(/ivysaur/i)).toBeInTheDocument()
    expect(screen.queryByRole(/progressbar/i)).not.toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button'))
    expect(mockGoBack).toHaveBeenCalled()
  })
})
