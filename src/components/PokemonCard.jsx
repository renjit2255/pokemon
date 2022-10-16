import React from 'react'

const PokemonCard = ({ pokemon = {} }) => <div
  role={'listitem'}
  className="card"
>
  <div className="card-body">
    <h2>{pokemon.name || ''}</h2>
  </div>
</div>

export default PokemonCard
