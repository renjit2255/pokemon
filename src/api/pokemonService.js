import { get } from './serviceMethods'
import { getPokeListUrl, getPokeDetailUrl } from './utils'

const getPokeList = (limit, offset) => get(getPokeListUrl(limit, offset)),
  getPokeDetail = name => get(getPokeDetailUrl(name))

export { getPokeList, getPokeDetail }
