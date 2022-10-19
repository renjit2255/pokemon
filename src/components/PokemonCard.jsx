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
          <h2>
            {
              data.name
            && <Link to={`/${PAGES.VIEW}/${data.name}`}>{data.name}</Link>
            }
          </h2>
          <p>
            <span className="highlight">Height:</span>
            <span className="pill">{data.weight || ''}</span>
          </p>
          <p>
            <span className="highlight">Weight:</span>
            <span className="pill">{data.height || ''}</span>
          </p>
          <Abilities name={data.name} abilities={data.abilities || []}/>
        </div>
      </div>
    }
  </div>
}
export default PokemonCard
