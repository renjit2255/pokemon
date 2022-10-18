import React from 'react'

const Moves = ({ name, moves }) => <div className="moves">
  <h4>Moves:</h4>
  <ul className="move-list">
    {
      (moves || []).map(
        ({ move }, index) => <li key={`${name}-${index}`}>
          {move.name || ''}
        </li>
      )
    }
  </ul>
</div>

export default Moves
