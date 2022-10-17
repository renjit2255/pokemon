import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PAGES } from '../constants'
import PokemonList from '../pages/PokemonList'
import PokemonDetail from '../pages/PokemonDetail'

const Routes = () => <Switch>
  <Route path={`/${PAGES.VIEW}/:name`} exact component={PokemonDetail} />
  <Route path={`/${PAGES.HOME}`} exact component={PokemonList} />
</Switch>

export default Routes
