import React, { useEffect, useState } from 'react'
import { getPokeList } from '../api/pokemonService'
import PokemonCard from '../components/PokemonCard'

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const retrievePokemons = async () => {
      const response = await getPokeList(),
        { data = {} } = response || {},
        { results = [] } = data

      setPokemons(results && results.length ? results : [])
    }
    retrievePokemons()
  }, [])

  return <main>
    <h1>Pokemon List</h1>
    <div
      role={'list'}
      className="card-container"
    >
      {pokemons.map(
        pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />
      )}
    </div>
  </main>
}

export default PokemonList
