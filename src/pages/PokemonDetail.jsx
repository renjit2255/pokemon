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
    <header>
      <button
        className="button button-primary go-back"
        onClick={goBack}
      >
      Back
      </button>
    </header>
    <main>
      {
        loading
          ? <div role="progressbar">loading...</div>
          : <>
            <h2>{pokeName}</h2>
            <div className="pokemon-body">
              <div className="left-panel">
                <div className="img">
                  <img src={image} alt={pokeName} loading="lazy"/>
                </div>
              </div>
              <div className="right-panel">
                <div className="highlight">
                Weight:<span className="pill">{weight || ''}</span>
                </div>
                <div className="highlight">
                Height:<span className="pill">{height || ''}</span>
                </div>
                <Abilities name={data.name} abilities={data.abilities || []}/>
                <Moves name={data.name} moves={data.moves || []} />
              </div>
            </div>
          </>
      }
    </main>
  </article>
}

export default PokemonDetail
