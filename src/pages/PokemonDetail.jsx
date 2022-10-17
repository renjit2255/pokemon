import React, { useCallback } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import usePokemanData from '../hooks/usePokemonData'

const PokemonDetail = () => {
  const { name } = useParams(),
    history = useHistory(),
    pokemanData = usePokemanData({ name }),
    { loading = false, data = {} } = pokemanData,
    { height = 0, weight = 0, name: pokeName = '' } = data,
    goBack = useCallback(() => history.goBack(), [name])

  return <div className="card">
    {
      loading
        ? <div role="progressbar">loading...</div>
        : <div className="card-body">
          <div>Name: {pokeName || ''}</div>
          <div>Weight: {weight || ''}</div>
          <div>Height: {height || ''}</div>
          <button onClick={goBack}>Back</button>
        </div>
    }
  </div>
}

export default PokemonDetail
