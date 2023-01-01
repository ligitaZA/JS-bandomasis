/*
  Parašyti JS kodą, kuris, vartotojui atėjus į puslapį, iš data.json failo į ekraną išvestų filmus ir aktorius, kurie tuose filmuose vaidina. (duomenų yra didelis perteklius, jums jų visų naudoti nereikia. Tik filmų pavadinimai ir aktorių vardai+pavardės).
*/
// Step 1: Define an async function that makes an HTTP request to the data.json file
async function getData() {
  try {
    // Use the fetch API to make an HTTP request to the data.json file
    const response = await fetch('data.json');

    // Convert the data to JSON format
    const data = await response.json();

    // Get the movie-list div element
    const movieList = document.getElementById('movie-list');

    // Loop through the movies array
    data.movies.forEach(movie => {
      // Create an li element
      const movieItem = document.createElement('li');

      // Create a text node with the movie title and actor name
      const movieText = document.createTextNode(`${movie.title} - ${movie.castAndCrew.actors[0].name}`);

      // Append the text node to the li element
      movieItem.appendChild(movieText);

      // Append the li element to the movie-list div
      movieList.appendChild(movieItem);
    });
  } catch (error) {
    console.error(error);
  }
}

// Step 2: Call the getData function when the page loads
getData();