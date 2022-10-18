import React, { useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import usePokemanData from '../hooks/usePokemonData'
import { Abilities, Moves } from '../components'
import { getPokemonImage } from '../utils'
import './PokemonDetail.css'

const PokemonDetail = () => {
  const { name } = useParams(),
    history = useHistory(),
    pokemanData = usePokemanData({ name }),
    { loading = false, data = {} } = pokemanData,
    { height = 0, weight = 0, name: pokeName = '' } = data,
    image = getPokemonImage(data),
    goBack = useCallback(() => history.goBack(), [name])

  return <article className="pokemon-view">
    <button className="button go-back" onClick={goBack}>Back</button>
    {
      loading
        ? <div role="progressbar">loading...</div>
        : <main>
          <h2>{pokeName}</h2>
          <div className="pokemon-body">
            <div className="left-panel">
              <div className="img">
                <img src={image} alt={pokeName} loading="lazy"/>
              </div>
            </div>
            <div className="right-panel">
              <div>Weight: {weight || ''}</div>
              <div>Height: {height || ''}</div>
              <Abilities name={data.name} abilities={data.abilities || []}/>
              <Moves name={data.name} moves={data.moves || []} />
            </div>
          </div>
        </main>
    }
  </article>
}

export default PokemonDetail
