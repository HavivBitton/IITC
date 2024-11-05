import API_KEY from "./env.js";

import {
  displayMovies,
  displayCast,
  displaySearchResults,
  displaySearchResultsByID,
} from "./view.js";
import { searchMoviesByID, searchMoviesByText } from "./controller.js";

// DOM Element
const popularMoviesContainer = document.querySelector(
  ".popular-movies-container"
);
const topRateMoviesContainer = document.querySelector(
  ".topRate-movies-container"
);
const nowPlayingMoviesContainer = document.querySelector(
  ".nowPlaying-movies-container"
);
const searchInput = document.getElementById("searchInput");
const searchResultsContainer = document.getElementById("searchResults");

// API url's
const api_URI_popular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const api_URI_topRate = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const api_URI_nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

// Render movies when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  renderMovie();
});

// Render Movie
function renderMovie() {
  fetchMovies(popularMoviesContainer, api_URI_popular);
  fetchMovies(topRateMoviesContainer, api_URI_topRate);
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

function getSimilarMovie(container, id) {
  const api_URI_similar = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  fetchMovies(container, api_URI_similar);
}
async function getMovieCast(container, id) {
  const api_URI_cast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await fetch(api_URI_cast);
    const data = await response.json();
    console.log(data);

    const actorsArray = data.cast;
    console.log(actorsArray);

    displayCast(container, actorsArray);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

// Search functionality
searchInput.addEventListener("input", async function () {
  const query = searchInput.value.trim();
  if (query.length > 2) {
    if (!isNaN(query)) {
      const movie = await searchMoviesByID(query);
      searchResultsContainer.style.display = "block";
      displaySearchResultsByID(movie);
    } else {
      const movies = await searchMoviesByText(query);
      searchResultsContainer.style.display = "block";
      displaySearchResults(movies);
    }
  } else {
    searchResultsContainer.style.display = "none";
  }
});

//Favorite
function addMovieToFavorite(movie) {
  const favoriteMoviesContainer = document.querySelector(".favorite-container");
  const api_URI_AddToFavorite = `https://api.themoviedb.org/3/account/21570547/favorite`;
}

export { getSimilarMovie, getMovieCast, addMovieToFavorite };
