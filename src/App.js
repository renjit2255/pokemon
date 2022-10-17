import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PokemonRoutes from './routes/Routes'

const App = () => <main className="container">
  <h1>
    Welcome to pokemon application!
  </h1>
  <section>
    <Router>
      <PokemonRoutes />
    </Router>
  </section>
</main>

export default App
