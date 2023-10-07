//Array of objects
const pokemons = [
  {
    name: 'Bulbasaur',
    id: 1,
    region: 'Kanto',
    type: 'Grass',
    evolution: true,
    maxcp: 1115,
    image: './pokemon-images/bulbasaur.png',
  },
  {
    name: 'Psyduck',
    id: 54,
    region: 'Kanto',
    type: 'Psychic',
    evolution: true,
    maxcp: 1250,
    image: './pokemon-images/psyduck.png',
  },
  {
    name: 'Pikachu',
    id: 25,
    region: 'Kanto',
    type: 'Electric',
    evolution: true,
    maxcp: 938,
    image: './pokemon-images/pikachu.png',
  },
  {
    name: 'Squirtle',
    id: 7,
    region: 'Kanto',
    type: 'Water',
    evolution: true,
    maxcp: 946,
    image:'./pokemon-images/squirtle.png',
  },
  {
    name: 'Gyarados',
    id: 130,
    region: 'Kanto',
    type: 'Flying',
    evolution: false,
    maxcp: 3391,
    image: './pokemon-images/gyarados.png',
  },
  {
    name: 'Girafarig',
    id: 203,
    region: 'Johto',
    type: 'Normal',
    evolution: true,
    maxcp: 2046,
    image: './pokemon-images/girafarig.png',
  },
  {
    name: 'Sableye',
    id: 302,
    region: 'Hoenn',
    type: 'Ghost',
    evolution: false,
    maxcp: 1476,
    image: './pokemon-images/sableye.png',
  },
  {
    name: 'Tyranitar',
    id: 248,
    region: 'Johto',
    type: 'Rock',
    evolution: false,
    maxcp: 3834,
    image: './pokemon-images/tyranitar.png',
  },
  {
    name: 'Charmander',
    id: 4,
    region: 'Kanto',
    type: 'Fire',
    evolution: false,
    maxcp: 980,
    image: './pokemon-images/charmander.png',
  },
  {
    name: 'Snorlax',
    id: 143,
    region: 'Kanto',
    type: 'Normal',
    evolution: false,
    maxcp: 3225,
    image: './pokemon-images/snorlax.png',
  },
  {
    name: 'Pinsir',
    id: 127,
    region: 'Kanto',
    type: 'Bug',
    evolution: false,
    maxcp: 2959,
    image: './pokemon-images/pinsir.png',
  },
  {
    name: 'Chikorita',
    id: 152,
    region: 'Johto',
    type: 'Grass',
    evolution: true,
    maxcp: 935,
    image: './pokemon-images/chikorita.png',
  },
  {
    name: 'Chimchar',
    id: 390,
    region: 'Sinnoh',
    type: 'Fire',
    evolution: true,
    maxcp: 1082,
    image: './pokemon-images/chimchar.png',
  },
  {
    name: 'Snorunt',
    id: 361,
    region: 'Hoenn',
    type: 'Ice',
    evolution: true,
    maxcp: 1004,
    image: './pokemon-images/snorunt.png',
  },
  {
    name: 'Jolteon',
    id: 135,
    region: 'Kanto',
    type: 'Electric',
    evolution: true,
    maxcp: 3265,
    image: './pokemon-images/jolteon.png',
  },
  {
    name: 'Banette',
    id: 354,
    region: 'Hoenn',
    type: 'Ghost',
    evolution: false,
    maxcp: 2599,
    image: './pokemon-images/banette.png',
  }
];
//GLOBAL VARIABLES - get elements
const cardContainer = document.getElementById('card-container');
const filterRegionElem = document.getElementById('filter-region');
const filterTypeElem = document.getElementById('filter-type');
const pokemonTypes = document.getElementById('card-subheading-type');
const sortAscElem = document.getElementById('sortlist');

//FUNCTIONS
//create dynamic cards
const loadPokemon = (pokemons) => {
  cardContainer.innerHTML = "";
  //iterate and add one card for each existent object and 
  //define the HTML structure of the card using template literal
  pokemons.forEach((pokemon) => {
    cardContainer.innerHTML += `
    <div class="card">
      <h3 class="card-heading">${pokemon.name} | Id: 0${pokemon.id}</h3>
      <p class="card-maxcp">Max CP: ${pokemon.maxcp}</p>
      <p class="card-subheading">Region: ${pokemon.region}</p>
      <p id="card-subheading-type">Type: ${pokemon.type}</p>
      <img class="card-img" src=${pokemon.image}>
      <p class="card-end">Evolution status: ${pokemon.evolution ? "Can evolve" : "Max level"}</p>
    </div>`;
  });
}
//FILTER by Region
const filterRegion = () => {
  const valueRegion = filterRegionElem.value;

  if(valueRegion === "all"){
    loadPokemon(pokemons);
  } else {
    const filteredListRegion = pokemons.filter((pokemon) => pokemon.region === valueRegion);

    loadPokemon(filteredListRegion);
  };
}
//FILTER by Type
const filterType = () => {
  const valueType = filterTypeElem.value;

  if(valueType === "all"){
    loadPokemon(pokemons);
  } else {
    const filteredListType = pokemons.filter((pokemon) => pokemon.type === valueType);
    loadPokemon(filteredListType);
  };
}
//SORTLIST
const sortPokemons = () => {
  const sortChoice = sortAscElem.value;

  if(sortChoice === "nameasc"){
    const orderListAsc = [...pokemons].sort((a, b) => a.name > b.name ? 1 : -1);
    loadPokemon(orderListAsc);
  }else if(sortChoice === "namedesc"){
    orderListAsc = [...pokemons].sort((a, b) => a.name > b.name ? 1 : -1);
    loadPokemon(orderListAsc.reverse());
  }else if(sortChoice === "idasc"){
    orderListAsc = [...pokemons].sort((a, b) => a.id > b.id ? 1 : -1);
    loadPokemon(orderListAsc);
  }else if(sortChoice === "iddesc"){
    orderListAsc = [...pokemons].sort((a, b) => a.id > b.id ? 1 : -1);
    loadPokemon(orderListAsc.reverse());
  }else if(sortChoice === "maxcpasc"){
    orderListAsc = [...pokemons].sort((a, b) => a.maxcp > b.maxcp ? 1 : -1);
    loadPokemon(orderListAsc);
  }else if(sortChoice === "maxcpdesc"){
    orderListAsc = [...pokemons].sort((a, b) => a.maxcp > b.maxcp ? 1 : -1)
    loadPokemon(orderListAsc.reverse());
  }
}
//SEARCH BAR - to be implemented
//EVENTS
filterRegionElem.addEventListener("change", filterRegion);
loadPokemon(pokemons);
filterTypeElem.addEventListener("change", filterType);
loadPokemon(pokemons);
sortAscElem.addEventListener("change", sortPokemons);
loadPokemon(pokemons);