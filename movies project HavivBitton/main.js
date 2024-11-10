import API_KEY from "./env.js";
// const accountID = 21570547;

import { displayMovies, displayCast, displaySearchResults } from "./view.js";

// DOM Element
const popularContainer = document.querySelector(".popular-movies-container");
const topRateContainer = document.querySelector(".topRate-movies-container");
const nowPlayingMoviesContainer = document.querySelector(
  ".nowPlaying-movies-container"
);
const searchInput = document.getElementById("searchInput");
const searchResultsContainer = document.getElementById("searchResults");
const favoriteMoviesContainer = document.getElementById("favorite-container");

// API url's
const api_URI_popular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const api_URI_topRate = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const api_URI_nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;
// const api_URI_favorite = `https://api.themoviedb.org/3/account/21570547/favorite/movies?api_key=${API_KEY}&language=en-US&page=1&sort_by=created_at.asc`;

// Render movies when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  if (popularContainer) {
    renderAllMovie();
  }
});

// Render Movie
function renderAllMovie() {
  fetchMovies(popularContainer, api_URI_popular);
  fetchMovies(topRateContainer, api_URI_topRate);
  fetchMovies(nowPlayingMoviesContainer, api_URI_nowPlaying);
}

// Fetch movies from API
async function fetchMovies(container, api_uri) {
  try {
    const response = await fetch(api_uri);
    const data = await response.json();
    const moviesArray = data.results;
    displayMovies(container, moviesArray);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

// Fetch the Similar movies
function getSimilarMovie(container, id) {
  const api_URI_similar = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  fetchMovies(container, api_URI_similar);
}

// Fetch Movie cast
async function getMovieCast(container, id) {
  const api_URI_cast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await fetch(api_URI_cast);
    const data = await response.json();
    const actorsArray = data.cast;
    displayCast(container, actorsArray);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

// Search functionality
searchInput.addEventListener("input", async function () {
  const query = searchInput.value.trim();
  if (query.length > 2) {
    displaySearchResults(query);
  } else {
    searchResultsContainer.style.display = "none";
  }
});

//Favorite

if (favoriteMoviesContainer) {
  renderFavoriteMovie();
}
async function renderFavoriteMovie() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjk2MDhiYjdkZDEzNjM1MTk5NGU4NWQxNGFkMjIxMyIsIm5iZiI6MTczMTIzMjU3OS45MjA2Mzc2LCJzdWIiOiI2NzBjZTU5MTQxMTFiZTRmMDI3NTEwMWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jcD4HhqZ5vipFVj6srR1zL3fq7lQF-oQl9-JL1UAqXE",
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/account/21570547/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
      options
    );
    const data = await response.json();
    const moviesArray = data.results;
    console.log(moviesArray);
    displayMovies(favoriteMoviesContainer, moviesArray);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }

  // fetchMovies(favoriteMoviesContainer, api_URI_favorite);
}

// Carousel navigation buttons
const popularLeftButton = document.querySelector(".popular-left-button");
const popularRightButton = document.querySelector(".popular-right-button");
const topRateLeftButton = document.querySelector(".topRate-left-button");
const topRateRightButton = document.querySelector(".topRate-right-button");

defineCarouselButtons(popularContainer, popularRightButton, popularLeftButton);
defineCarouselButtons(topRateContainer, topRateRightButton, topRateLeftButton);

function defineCarouselButtons(container, rightBtn, LeftBtn) {
  rightBtn.addEventListener("click", () => {
    container.scrollBy({ left: 300, behavior: "smooth" });
  });
  LeftBtn.addEventListener("click", () => {
    container.scrollBy({ left: -300, behavior: "smooth" });
  });
}

// nextButton.addEventListener("click", () => {
//   popularContainer.scrollBy({ left: 300, behavior: "smooth" });
// });

// prevButton.addEventListener("click", () => {
//   popularContainer.scrollBy({ left: -300, behavior: "smooth" });
// });

export { getSimilarMovie, getMovieCast };
