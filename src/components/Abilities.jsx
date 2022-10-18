import React from 'react'

const Abilities = ({ name, abilities }) => <div className="abilities">
  <h4>Abilities:</h4>
  <ul className="ability-list">
    {
      (abilities || []).map(
        ({ ability }, index) => <li key={`${name}-${index}`}>
          {ability.name || ''}
        </li>
      )
    }
  </ul>
</div>

export default Abilities
