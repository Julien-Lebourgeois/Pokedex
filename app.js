const searchInput = document.querySelector('.recherche-poke input');

// API call
function fetchPokemonBase() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=1154')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

fetchPokemonBase();

// Animation input

searchInput.addEventListener('input', function (e) {
  if (e.target.value !== '') {
    e.target.parentNode.classList.add('active-input');
  } else if (e.target.value === '') {
    e.target.parentNode.classList.remove('active-input');
  }
});
