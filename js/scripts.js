// New pokemonRepository IIFE
let pokemonRepository = (function () {
  let modalContainer = document.querySelector('#modal-container');
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20';

// Function to get the Pokémon’s details from the server
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

// Function for showModal with Bootstrap
  function showModal(pokemon) {
    modalContainer.innerText = '';
    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.classList.add('btn btn-primary');
    closeButtonElement.innerText = 'x';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h5');
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement('p');
    contentElement.innerText = 'Height: ' + pokemon.height;

    let pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.imageUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(pokemonImage);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  // Previous code - Function for showModal to enable specifying a title and content
  /*  function showModal(pokemon) {
      // Clear all existing modal content
      modalContainer.innerHTML = '';

      let modal = document.createElement('div');
      modal.classList.add('modal');

      // Add the new modal content
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'x';
      closeButtonElement.addEventListener('click', hideModal);

      let titleElement = document.createElement('h2');
      titleElement.innerText = pokemon.name;

      let contentElement = document.createElement('p');
      contentElement.innerText = 'Height: ' + pokemon.height;

      let pokemonImage = document.createElement('img');
      pokemonImage.src = pokemon.imageUrl;

      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modal.appendChild(pokemonImage);
      modalContainer.appendChild(modal);

      modalContainer.classList.add('is-visible');
    } */

// Function to close the modal
  function hideModal() {
    modalContainer.classList.remove('is-visible');
    //if (window.confirm("Do you really want to close this?"));
  }

  // hiding the modal if it’s actually visible (with ESC key)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

// Function to add pokemon to the pokemonList - with data-type check
  function add(pokemon) {
    if (typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
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
    //button.classList.add('button-class');
    button.classList.add('list-group-item');
    button.classList.add("btn");
    button.classList.add("btn-primary");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function () {
      showDetails(pokemon /*, listpokemon*/);
    });
  }

// Function to load pokemon list from pokeapi
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
                //Capitalize the first letter of each pokemonName
          name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

// Function to load details of Pokemon
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    getAll: getAll,
    filterPokemon: filterPokemon,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

/* console.log('This is returned from the filter function', pokemonRepository.filterPokemon('Pidgeot', 'name'));
pokemonRepository.add({ name: 'Kakuna', height: 0.6, types:['bug', 'poison'] });
console.log(pokemonRepository.getAll()); */

// Function to show item photo on browser when clicked in IIFE
/*  function showDetails(pokemon, listpokemon){
    // create Image in JavaScript
    let imageElement = new Image();
    imageElement.src = pokemon.imageFile;
    listpokemon.appendChild(imageElement);
  } */

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
