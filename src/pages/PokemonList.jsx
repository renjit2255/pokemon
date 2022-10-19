import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokeList } from '../api/pokemonService'
import { PokemonCard, Pagination, PageSizer } from '../components'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]),
    [loading, setLoading] = useState(false),
    [totalCount, setTotalCount] = useState(0),
    { pageSize = 20, pageNumber = 1 } = useParams()

  useEffect(() => {
    const retrievePokemons = async () => {
      const response = await getPokeList(pageSize, pageSize * (pageNumber - 1)),
        { data = {} } = response || {},
        { results = [], count = 0 } = data

      setPokemons(results && results.length ? results : [])
      setTotalCount(count)
    }
    setLoading(true)
    retrievePokemons()
    setLoading(false)
  }, [pageSize, pageNumber])

  return <section>
    <header className="header">
      <div className="navigation">
        <Pagination
          totalCount={totalCount}
          pageSize={pageSize}
          currentPage={pageNumber}
        />
        <PageSizer sizes={[10, 20, 50]} size={pageSize} />
      </div>
    </header>
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
    <footer className="footer">
      <div className="navigation">
        <Pagination
          totalCount={totalCount}
          pageSize={pageSize}
          currentPage={pageNumber}
        />
      </div>
    </footer>
  </section>
}

export default PokemonList
