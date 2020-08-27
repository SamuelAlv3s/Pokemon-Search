// grab the things  we need

const pokemonContainer = document.querySelector('.pokemon-container');
const formE1 = document.querySelector('form');
const inputE1 = document.querySelector('input[type=text');

// listen for users events

formE1.addEventListener('submit', (e) =>{
    e.preventDefault();
    pokemonContainer.innerHTML = '';
    getPokemon(inputE1.value);
});

// define our functions/actions

async function getPokemon(name){
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await res.json();


    const pokemonE1 = document.createElement('div');

    pokemonE1.innerHTML = 
    `
        <div class="info"> 
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" width="200"/>
            <h2> ${pokemon.name}</h2>
        </div>

        <div class="stats">
            ${pokemon.stats.map((stat) => {
                return `
                    <p>${stat.stat.name}: ${stat.base_stat}</p>`;
            }).join('')}
        </div>
    `
    
    pokemonContainer.appendChild(pokemonE1);
}

//  run things

getPokemon();