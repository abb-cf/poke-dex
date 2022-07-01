//IIFE variable pokemonRepository
let pokemonRepository = (function () {
  //connects to pokeapi
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //adds functions for add and getAll
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.error("pokemon is not correct");
    }
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

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (resonse) {
      return response.json();
    }).then(function (details) {
      //Now we add teh details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

//return assigns keys 'add' and 'getAll'
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

pokemonRepository.loadList().then(function() {
  //Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
