import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Moves from '../Moves'

describe('<Moves />', () => {
  it('renders pokemon abilities without errors', async () => {
    const name = 'bulbasaur',
      moves = [{
        move: {
          name: 'swords-dance',
          url: 'https://pokeapi.co/api/v2/move/14/'
        },
        version_group_details: [
          {
            level_learned_at: 0,
            move_learn_method: {
              name: 'machine',
              url: 'https://pokeapi.co/api/v2/move-learn-method/4/'
            },
            version_group: {
              name: 'red-blue',
              url: 'https://pokeapi.co/api/v2/version-group/1/'
            }
          }
        ]
      }
      ]
    render(<Moves name={name} moves={moves} />)
    expect(screen.queryByRole('list')).toBeInTheDocument()
    expect(screen.queryAllByRole('listitem')).toHaveLength(1)
  })
})
