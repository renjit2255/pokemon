import { renderHook } from '@testing-library/react-hooks'
import usePokemonData from './usePokemonData'
import { getPokeDetail as mockGetPokeDetail } from '../api/pokemonService'

jest.mock('../api/pokemonService')
describe('usePokemonData', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('hook calls the api with updated value everytime', async () => {
    mockGetPokeDetail.mockReturnValueOnce({ name: 'ivysaur' })
      .mockReturnValue({ name: 'bulbasaur' })

    const { result, waitForNextUpdate, rerender } = renderHook(
      usePokemonData,
      { initialProps: { name: 'ivysaur' } }
    )
    expect(result.current.loading).toBe(true)
    expect(mockGetPokeDetail).toHaveBeenCalledTimes(1)
    expect(mockGetPokeDetail).toHaveBeenCalledWith('ivysaur')

    await waitForNextUpdate()
    expect(result.current.loading).toBe(false)

    rerender({ name: 'bulbasaur' })
    await waitForNextUpdate()

    expect(mockGetPokeDetail).toHaveBeenCalledTimes(2)
    expect(mockGetPokeDetail).toHaveBeenCalledWith('bulbasaur')
  })
})
