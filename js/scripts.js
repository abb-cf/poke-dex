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

/*
console.log(pokemonList[0]);
console.log(pokemonList[1]);
console.log(pokemonList[2]);
*/

//displays each pokemon in array along with their height
//adds exclamation with if/else loop if pokemon height is greater than 6.
for (let i=0; i < pokemonList.length; i++){
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' );
  if (pokemonList[i].height > 6) {
      document.write(' - Wow! That\'s big!' + '<br>');
  } else {
    document.write('<br>')
  }
}
