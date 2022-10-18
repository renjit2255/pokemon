import React from 'react'
import { Link } from 'react-router-dom'
import usePokemonData from '../hooks/usePokemonData'
import Abilities from './Abilities'
import { PAGES } from '../constants'
import { getPokemonImage } from '../utils'

const PokemonCard = ({ pokemon = {} }) => {
  const pokemanData = usePokemonData({ name: pokemon.name || '' }),
    { loading = false, data = {} } = pokemanData,
    image = getPokemonImage(data)

  return <div
    role={'listitem'}
    className="card"
  >
    { loading
      ? <div role="progressbar">Loading...</div>
      : <div className="card-body">
        <div className="img">
          <img src={image} alt={data.name} loading="lazy"/>
        </div>
        <div className="text">
          <h3>
            {
              data.name
            && <Link to={`${PAGES.VIEW}/${data.name}`}>{data.name}</Link>
            }
          </h3>
          <p>Height: {data.weight}</p>
          <p>Weight:{data.height}</p>
          <Abilities name={data.name} abilities={data.abilities || []}/>
        </div>
      </div>
    }
  </div>
}
export default PokemonCard
