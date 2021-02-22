let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 2,
    types: ['grass', 'poision'],
  },
  {
    name: 'Butterfree',
    height: 1.1,
    types: ['bug', 'flying'],
  },
  {
    name: 'Pidgeot',
    height: 0.5,
    types: ['flying', 'normal'],
  },
];

// forEach() function to iterate over the Pokémon in pokemonList array in order to print the details of each one.

function myLoopFunction(pokemon) {
  console.log(pokemon.name + ' is ' + pokemon.height + 'm tall. <br/> <br/>');
}
pokemonList.forEach(myLoopFunction);

// New pokemonRepository IIFE
let pokemonRepository = (function () {
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.add({ name: 'Kakuna', height: 0.6, types:['bug', 'poison'] });
console.log(pokemonRepository.getAll());

// IIFE function with loop to pokemonList array and display it in DOM
(function () {
  pokemonList.forEach(function(pokemon) {
    let pokemonName = pokemon.name
    let pokemonHeight = pokemon.height

    if(pokemonHeight === 2) {
      document.write(pokemonName + ' (height : ' + pokemonHeight + ')' + ' - Wow! That is tall! <br/> <br/>');
    } else if(pokemonHeight > 1 && pokemonHeight < 2) {
      document.write(pokemonName +  ' (height : ' + pokemonHeight + ')' + ' - That is an average size. <br/> <br/>');
    } else
      document.write(pokemonName +  ' (height : ' + pokemonHeight + ')'  + ' - That is short. <br/> <br/> ');
    });
})();

// Filter array of objects with multiple values
let filteredPokemon = pokemonList.filter(function (currentElement) {
  return currentElement.name === "Pidgeot" && currentElement.height === 0.5;
});

console.log(filteredPokemon);

/* let filteredPokemon = pokemonList.filter(function (currentElement) {
  return currentElement.height < 2 && currentElement.height > 1;
});

console.log(filteredPokemon); */

// A loop that iterates over each item in pokemonList
/* for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height === 2) {
    document.write(`${(pokemonList[i].name)} (height: ${pokemonList[i].height}m) - Wow! That is tall! <br/> <br/>`);
  } else if (pokemonList[i].height > 1 && pokemonList[i].height < 2) {
    document.write(`${(pokemonList[i].name)} (height: ${pokemonList[i].height}m) - That is an average size. <br/> <br/>`);
  } else {
    document.write(`${(pokemonList[i].name)} (height: ${pokemonList[i].height}m) - That is short. <br/> <br/>`);
  }
}; */
