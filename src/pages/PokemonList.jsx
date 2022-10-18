import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokeList } from '../api/pokemonService'
import { PokemonCard, Pagination } from '../components'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]),
    [loading, setLoading] = useState(false),
    pageSize = 20,
    [totalCount, setTotalCount] = useState(0),
    { limit = 20, pageNumber = 1 } = useParams()

  useEffect(() => {
    const retrievePokemons = async () => {
      const response = await getPokeList(limit, limit * (pageNumber - 1)),
        { data = {} } = response || {},
        { results = [], count = 0 } = data

      setPokemons(results && results.length ? results : [])
      setTotalCount(count)
    }
    setLoading(true)
    retrievePokemons()
    setLoading(false)
  }, [limit, pageNumber])

  return <section>
    <h2>Pokemon List</h2>
    <Pagination
      totalCount={totalCount}
      pageSize={pageSize}
      currentPage={pageNumber}
    />
    {
      loading
        ? <div role="progressbar">Loading...</div>
        : <div
          role={'list'}
          className="cards"
        >
          {pokemons.map(
            pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />
          )}
        </div>
    }
    <Pagination
      totalCount={totalCount}
      pageSize={pageSize}
      currentPage={pageNumber}
    />
  </section>
}

export default PokemonList
