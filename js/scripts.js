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

  //displays each pokemon in array along with their height
  //adds exclamation with if loop if pokemon height is greater than 6.

  pokemonList.forEach(function(pokemon) {
    document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') ');
    if (pokemon.height > 6) {
      document.write(' - Wow! That\'s big!');
    }
  });

//return assigns keys 'add' and 'getAll'
  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  };

})();

console.log(pokemonRepository.add([{name: "Pikachu", height: 4, types: "electric"}]));
console.log(pokemonRepository.getAll());
