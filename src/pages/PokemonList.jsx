import React, { useEffect, useState } from 'react'
import { getPokeList } from '../api/pokemonService'
import { PokemonCard } from '../components'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]),
    [loading, setLoading] = useState(false)

  useEffect(() => {
    const retrievePokemons = async () => {
      const response = await getPokeList(),
        { data = {} } = response || {},
        { results = [] } = data

      setPokemons(results && results.length ? results : [])
    }
    setLoading(true)
    retrievePokemons()
    setLoading(false)
  }, [])

  return <section>
    <h2>Pokemon List</h2>
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
  </section>
}

export default PokemonList
