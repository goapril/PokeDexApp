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

// New pokemonRepository IIFE
let pokemonRepository = (function () {
// Function to add pokemon to the pokemonList - with data-type check
  function add(pokemon) {
    if (typeof pokemon === 'object') {
      pokemonList.push(pokemon);
    } else {
      console.log('you need an object');
    }
  }

// Function to return pokemonList
  function getAll() {
    return pokemonList;
  }

// Function to filter array of objects
  function filterPokemon(value, property) {
    return pokemonList.filter(function (currentElement) {
      return currentElement[property] === value
    })
  }

// Function to add items on the list with button for each item
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function () {
      showDetails(pokemon, listpokemon);
    });
  }

// Function to show item photo on browser when clicked
  function showDetails(pokemon, listpokemon){
    // create Image in JavaScript
    let imageElement = new Image();
    imageElement.src = pokemon.imageFile;
    listpokemon.appendChild(imageElement);
  }

  return {
    add: add,
    getAll: getAll,
    filterPokemon: filterPokemon,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

console.log('This is returned from the filter function', pokemonRepository.filterPokemon('Pidgeot', 'name'));
pokemonRepository.add({ name: 'Kakuna', height: 0.6, types:['bug', 'poison'] });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});



// forEach() function to iterate over the Pokémon in pokemonList array in order to print the details of each one.

/* function myLoopFunction(pokemon) {
  console.log(pokemon.name + ' is ' + pokemon.height + 'm tall. <br/> <br/>');
}
pokemonList.forEach(myLoopFunction); */

// IIFE function with loop to pokemonList array
/* (function () {
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
})(); */

// Validate whether all Object.keys() of the parameter are equal to the expected specific keys
/* Object.keys(pokemonList).forEach(function (item) {
	console.log(item);
	console.log(pokemonList[item]);
}); */

// Filter array of objects with multiple values = without new repository
/* let filteredPokemon = pokemonList.filter(function (currentElement) {
  return currentElement.name === "Pidgeot" && currentElement.height === 0.5;
});
console.log(filteredPokemon);

let filteredPokemon = pokemonList.filter(function (currentElement) {
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
