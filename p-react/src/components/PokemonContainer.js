import React, { useState, useEffect } from 'react';
import './pokemonContainer.css';



function PokemonContainer() {

  const [query, setQuery] = useState('bulbasaur');
  const [pokemon, setPokemon] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getPokemon(query);
  }, []);

  async function getPokemon(name) {
    setHasError(false);
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setPokemon(data);
    } catch(err){
      setHasError('There was a problem - No Pokemon Found')
    }
    
  }

  function handleSubmit(e) {
    e.preventDefault();
    getPokemon(query);
  }

  function handleChange(e) {
    setQuery(e.target.value);
    getPokemon(e.target.value);
  }

  return (
    <div className="pokemon-container">
      <form onSumit={handleSubmit}>
        <input
          type="text"
          placeholder="Search the Pokemons"
          value={query}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>

      {hasError && 'No Pokemon Found'}
      {!hasError && pokemon && <Pokemon pokemon={pokemon}/>}

    </div>
  );
}

function Pokemon({ pokemon }) {
  return (
    <div className="pokemon">

      <div className="info">
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} width="200" />
        <h2>{pokemon.name}</h2>
      </div>

      <div className="stats">
        {pokemon.stats.map((stat, index) => (
          <p key={index}>
            {stat.stat.name}: {stat.base_stat}
          </p>
        ))}
      </div>
    </div>

  );
}

export default PokemonContainer;
