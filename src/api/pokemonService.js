import { get } from './serviceMethods'
import { getPokeListUrl, getPokeDetailUrl } from './utils'

const getPokeList = (limit = 20, offset = 0) => get(getPokeListUrl(limit, offset)),
  getPokeDetail = name => get(getPokeDetailUrl(name))

export { getPokeList, getPokeDetail }
