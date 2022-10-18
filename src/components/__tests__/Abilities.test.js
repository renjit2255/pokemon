import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Abilities from '../Abilities'

describe('<Abilities />', () => {
  it('renders pokemon abilities without errors', async () => {
    const name = 'bulbasaur',
      abilities = [{
        ability: {
          name: 'overgrow',
          url: 'https://pokeapi.co/api/v2/ability/65/'
        },
        is_hidden: false,
        slot: 1
      },
      {
        ability: {
          name: 'chlorophyll',
          url: 'https://pokeapi.co/api/v2/ability/34/'
        },
        is_hidden: true,
        slot: 3
      }
      ]
    render(<Abilities name={name} abilities={abilities} />)
    expect(screen.queryByRole('list')).toBeInTheDocument()
    expect(screen.queryAllByRole('listitem')).toHaveLength(2)
  })
})
