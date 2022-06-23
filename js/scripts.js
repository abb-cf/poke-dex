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
//adds exclamation with if/else loop if pokemon height is greater than 6.
for (let i=0; i < pokemonList.length; i++){
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ' );
  if (pokemonList[i].height > 6) {
      document.write(' - Wow! That\'s big!' + '<br>');
  } else {
    document.write('<br>')
  }
}

function divide(dividend, divisor){
  if (divisor === 0){
    return "You're trying to divide by zero."
  }
  else{
    let result = dividend / divisor;
    return result;
  }
}

console.log(divide(4, 2));
console.log(divide(7, 0));
console.log(divide(1, 4));
console.log(divide(12, -3));
