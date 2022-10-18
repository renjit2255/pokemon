import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PokemonRoutes from './routes/Routes'

const App = () => <div className="container">
  <header>
    <h1>
      Welcome to pokemon application!
    </h1>
  </header>
  <main>
    <Router>
      <PokemonRoutes />
    </Router>
  </main>
</div>

export default App
