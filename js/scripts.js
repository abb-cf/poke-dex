//IIFE variable pokemonRepository
let pokemonRepository = (function () {
  //pokemonList array
  let pokemonList = [
  {
    name: "Bulbasaur",
    height: 7,
    types: "poison"
  },
  {
    name: "Charmander",
    height: 6,
    types: "fire",
  },
  {
    name: "Squirtle",
    height: 5,
    types: "water",
  }
  ];

  //tests array code
  /*
  console.log(pokemonList[0]);
  console.log(pokemonList[1]);
  console.log(pokemonList[2]);
  */

//adds functions for add and getAll
function add(pokemon) {
  pokemonList.push(pokemon);
}

function getAll(){
    return pokemonList;
}

//return assigns keys 'add' and 'getAll'
  return {
    add: add,
    getAll: getAll
  };

})();

pokemonRepository.add({name: "Pikachu", height: 4, types: "electric"})
console.log(pokemonRepository.getAll());

//displays each pokemon in pokemonList array along with their height
//adds exclamation with if loop if pokemon height is greater than 6.
pokemonRepository.getAll().forEach(pokemon => {
  let pokemonList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('.pokemon-name');
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);
})
