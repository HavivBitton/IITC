import API_KEY from "./env.js";

const moviesContainer = document.querySelector(".movies-container");

// REDNER MOVIE
async function fetchMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    const moviesArray = data.results;
    displayAllMovie(moviesArray);
    console.log(moviesArray);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}
fetchMovies();

function displayAllMovie(moviesArray) {
  moviesContainer.innerHTML = moviesArray.map(
    (movie) =>
      `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <div class="movie-details">
        <h3>${movie.title}</h3>
        <p>Rating: ${movie.vote_average}</p>
      </div>`
  );
}
