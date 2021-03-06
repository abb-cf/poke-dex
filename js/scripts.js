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
    button.classList.add('btn-poke', 'btn-light');
    // data target & data toggle?
    button.setAttribute('data-target', 'modal');
    button.setAttribute('data-toggle', 'modal');
    listItem.classList.add('list-group-item');
    listItem.appendChild(button);
    pokeList.appendChild(listItem);
  //eventListener for button on click, opens Modal by calling function showDetails
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }

  //fetch list data from api
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
        //console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  //fetch details from api
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      //Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;

    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      //show Modal
      showModal(pokemon);
    });
  }

  // modal

  // let modalContainer = document.querySelector('#modal-container');

  function showModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');
    let modalHeader = $('.modal-header');
    // clear any existing data from previously selected pokemon
    modalTitle.empty();
    modalBody.empty();

    // create element for pokemon name
    let nameElement = $('<h1>' + pokemon.name + '</h1>');
    // create img element for image of pokemon
    let imageElementFront = $('<img class="modal-img" style="width:50%">');
    imageElementFront.attr('src', pokemon.imageUrl);
    // create element for height of Pokemon
    let heightElement = $('<p>' + 'height: ' + pokemon.height + '</p>');
    //create element for Pokemon types
    let concatTypes = '';

    pokemon.types.forEach((currentType, index) => {
    if (index != pokemon.types.length -1) {
      concatTypes+=`${currentType.type.name}, `;
    }
    else if (index === pokemon.types.length -1) {
      concatTypes+=`${currentType.type.name}`;
    }
    })

    let typesElement = $('<p>' + 'types: ' + concatTypes + '</p>');

    // append elements to variables
    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(heightElement);
    modalBody.append(typesElement);
    $('#exampleModalCenter').modal();
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
