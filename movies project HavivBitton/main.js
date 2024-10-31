import API_KEY from "./env.js";

const popularMoviesContainer = document.querySelector(
  ".popular-movies-container"
);
const topRateMoviesContainer = document.querySelector(
  ".topRate-movies-container"
);

// REDNER MOVIE
function renderMovie() {
  fetchPopularMovies();
  fetchTopRateMovies();
}

// API call that  fetch all popular
async function fetchPopularMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    const moviesArray = data.results;
    displayMovie(popularMoviesContainer, moviesArray);
    console.log(moviesArray);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}
// API call that  fetch all topRate
async function fetchTopRateMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    const moviesArray = data.results;
    displayMovie(topRateMoviesContainer, moviesArray);
    console.log(moviesArray);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

function displayMovie(container, moviesArray) {
  container.innerHTML = moviesArray.map(
    (movie) =>
      `
      <div id="${movie.id}" class="movie-card">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="movie-img" >
        <div class="movie-details">
        <h3>${movie.title}</h3>
        </div>
      </div>`
  );
}
renderMovie();
