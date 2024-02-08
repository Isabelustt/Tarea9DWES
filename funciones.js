// Función para obtener el contenido de un archivo desde la API de Pokémon mediante una petición AJAX
function getFileContent(numeroPokemon, exito) {
    // Crear una nueva instancia de XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // Utilizar la URL directamente en la función open para hacer la solicitud a la API de Pokémon
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}/`, true); 
    // Enviar la petición
    xhr.send();
    // Definir la función que se ejecutará cada vez que cambie el estado de la petición
    xhr.onreadystatechange = function() {
      // Verificar si la petición se ha completado (4) y el estado es OK (200)
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Parsear la respuesta JSON y llamar a la función de éxito con los datos obtenidos
        exito(JSON.parse(xhr.responseText));
      }
    };
  }
  

// Función principal para obtener detalles del Pokémon
function obtenerDetallesPokemon() {
    // Obtener el número de Pokémon ingresado por el usuario desde un elemento HTML
    const numeroPokemon = document.getElementById('numeroPokemon').value;

    // Utilizar la función getFileContent para obtener los detalles del Pokémon y llamar a la función mostrarDetallesPokemon como éxito
    getFileContent(numeroPokemon, mostrarDetallesPokemon);
}

// Función para mostrar los detalles del Pokémon en la página
function mostrarDetallesPokemon(pokemon) {
    // Crear HTML con los detalles del Pokémon utilizando los datos obtenidos
    const detallesPokemonHTML = `
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <p>Altura: ${pokemon.height} decímetros</p>
      <p>Peso: ${pokemon.weight} hectogramos</p>
    `;
    // Mostrar los detalles en el elemento con id "detallesPokemon"
    document.getElementById('detallesPokemon').innerHTML = detallesPokemonHTML;
}





