import { useEffect, useState } from 'react'
import { getPokeDetail } from '../api/pokemonService'

const CACHE = {},
  usePokemanData = ({ name }) => {
    const defaultValue = {},
      [loading, setLoading] = useState(false),
      [data, setData] = useState(defaultValue)

    useEffect(() => {
      const cacheID = name,
        getDetails = async () => {
          setLoading(true)
          const response = await getPokeDetail(name),
            { data: newData = {} } = response || {}

          setLoading(false)
          setData(newData || {})
          CACHE[name] = newData
        }

      if (CACHE[cacheID] !== undefined) {
        setData(CACHE[cacheID])
        setLoading(false)
      } else {
        setLoading(true)
        setData(defaultValue)
        getDetails()
      }
    }, [name])

    return { loading, data }
  }

export default usePokemanData
