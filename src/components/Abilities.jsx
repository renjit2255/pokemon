import React from 'react'

const Abilities = ({ name, abilities }) => <div className="abilities">
  <div className="highlight">Abilities:</div>
  <ul className="pill-container">
    {
      (abilities || []).map(
        ({ ability }, index) => <li
          key={`${name}-${index}`}
          className="pill"
        >
          {ability.name || ''}
        </li>
      )
    }
  </ul>
</div>

export default Abilities
