//IIFE variable pokemonRepository
let pokemonRepository = (function () {
  //connects to pokeapi
  let pokemonList = []
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //adds functions for add and getAll
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll(){
    return pokemonList;
  }

  //new function addListItem
  function addListItem(pokemon){
    let pokeList = document.querySelector('.poke-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('.pokemon-name');
    listItem.appendChild(button);
    pokeList.appendChild(listItem);
  //eventListener for button on click, logs clicked pokemon in console by calling function showDetails
    button.addEventListener('click', function (event){
      showDetails(pokemon);
    })
  }

  function showDetails(pokemon){
    console.log(pokemon.name);
  }

//return assigns keys 'add' and 'getAll'
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };

})();

pokemonRepository.add({name: "Pikachu", height: 4, types: "electric"})
console.log(pokemonRepository.getAll());

//displays each pokemon in pokemonList array along with their height
//adds exclamation with if loop if pokemon height is greater than 6.
pokemonRepository.getAll().forEach(pokemon => {
  pokemonRepository.addListItem(pokemon);
})
