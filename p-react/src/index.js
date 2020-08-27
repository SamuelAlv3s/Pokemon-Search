import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PokemonContainer from './components/PokemonContainer';

function App(){
  return(
    <PokemonContainer />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


