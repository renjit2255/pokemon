import React from 'react'
import { Link } from 'react-router-dom'
import usePokemonData from '../hooks/usePokemonData'
import { PAGES } from '../constants'

const PokemonCard = ({ pokemon = {} }) => {
  const pokemanData = usePokemonData({ name: pokemon.name || '' }),
    { loading = false, data = {} } = pokemanData

  return <div
    role={'listitem'}
    className="card"
  >
    { loading
      ? <div role="progressbar">Loading...</div>
      : <div className="card-body">
        <h2>
          {
            data.name
            && <Link to={`${PAGES.VIEW}/${data.name}`}>{data.name}</Link>
          }
        </h2>
      </div>
    }
  </div>
}
export default PokemonCard
