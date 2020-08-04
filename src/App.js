import React from 'react'
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails'
import Header from './helper/header';
import {BrowserRouter as Router,Route,
  Switch} from 'react-router-dom';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact> <Home /> </Route>
          <Route path="/pokemonList"> <PokemonList /> </Route>
          <Route path="/:slug" > <PokemonDetails /> </Route>
        </Switch>
    </Router>
  )
}

function Home() {
  return(
    <div>
      <Header />
      <div class="container">
        <PokemonList />
      </div>
    </div>
)
}
