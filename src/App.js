import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PokemonRoutes from './routes/Routes'

const App = () => <div className="container">
  <header className="header">
    <h1 style={{ textAlign: 'center' }}>
      Pokemon
    </h1>
  </header>
  <main>
    <Router>
      <PokemonRoutes />
    </Router>
  </main>
</div>

export default App
