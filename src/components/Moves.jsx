import React from 'react'

const Moves = ({ name, moves }) => <div className="moves">
  <div className="highlight">Moves:</div>
  <ul className="pill-container">
    {
      (moves || []).map(
        ({ move }, index) => <li
          key={`${name}-${index}`}
          className="pill"
        >
          {move.name || ''}
        </li>
      )
    }
  </ul>
</div>

export default Moves
