import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
/* import pokemons from './data';
import Pokedex from './Pokedex'; */
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/users' component={Users} />
      </div>
    </BrowserRouter>
  );
}

export default App;