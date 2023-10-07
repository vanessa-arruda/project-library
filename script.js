/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/
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

// Create the global variables
const cardContainer = document.getElementById('card-container');
const filterRegionElement = document.getElementById('filter-region-select');
const sortDropdown = document.getElementById('dropdown-sort');
//const pokemonTypes = document.getElementById('card-subheading-type');

//FUNCTIONS
//create the cards for each object in the Array and add one param of the expected array
const loadPokemon = (pokemons) => {
//first: empty the container of any possible content
  cardContainer.innerHTML = "";

  //iterate and add one card for each existent object and 
  //define the HTML structure of the card using template literal
  pokemons.forEach((pokemon) => {
    
    cardContainer.innerHTML += `
    <div class="card">
      <h3 class="card-heading">${pokemon.name} | Id: 0${pokemon.id}</h3>
      <p class="card-subheading">Region: ${pokemon.region}</p>
      <p id="card-subheading-type">Type: ${pokemon.type}</p>
      <img class="card-img" src=${pokemon.image}>
      <p class="card-end">Evolution status: ${pokemon.evolution ? "Can evolve" : "Max level"}</p>
    </div>`;
  });
}

loadPokemon(pokemons);

//Automate filter <options> creation to use multiple filters
//used region property as reference for this filter
const createFilters = () => {
  //start with empty array 
  const availableRegions = [];

  //for...of (iterate in the pokemons array to check if the region is listed,
  //if not, add it to the filtered array.
  for (const pokemon of pokemons){
    if(!availableRegions.includes(pokemon.region)){
      availableRegions.push(pokemon.region);
    }
  }
  console.log(availableRegions);

  filterRegionElement.innerHTML = `
  <option value="all">All</option>`;
  availableRegions.forEach((region) => {
    filterRegionElement.innerHTML+= `<option value="${region}">${region}</option>`;
  });
}
createFilters();

//create sortlist
