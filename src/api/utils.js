import { POKEMON_API_URL } from '../constants'

// eslint-disable-next-line max-len
const getPokeListUrl = (limit = 20, offset = 0) => `${POKEMON_API_URL}/pokemon?limit=${limit}&offset=${offset}`,
  getPokeDetailUrl = value => `${POKEMON_API_URL}/pokemon/${value}`

export { getPokeListUrl, getPokeDetailUrl }
