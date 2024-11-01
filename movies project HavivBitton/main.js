import API_KEY from "./env.js";

const toDisplayContainer = document.getElementById("to-display");
const popularMoviesContainer = document.querySelector(
  ".popular-movies-container"
);
const topRateMoviesContainer = document.querySelector(
  ".topRate-movies-container"
);
const nowPlayingMoviesContainer = document.querySelector(
  ".nowPlaying-movies-container"
);

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
    displayMovie(container, moviesArray);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

// Function to create a card for each movie
function displayMovie(container, moviesArray) {
  container.innerHTML = ""; // Clear container first
  moviesArray.forEach((movie) => {
    // Create card element
    const card = document.createElement("div");
    card.id = movie.id;
    card.className = "movie-card";

    // Create image element
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    img.alt = movie.title;
    img.className = "movie-img";

    // Create movie details element
    const details = document.createElement("div");
    details.className = "movie-details";
    details.innerHTML = `<h3>${movie.title}</h3>`;

    card.appendChild(img);
    card.appendChild(details);
    container.appendChild(card);

    // Add click event to show specific movie details
    card.addEventListener("click", () => displayMovieDetails(movie));

    // img.onload = () => {
    //   const colorThief = new ColorThief();
    //   const rgb = colorThief.getColor(img); // Get dominant color as [r, g, b] array
    //   let rgb = getAverageRGB(img);
    //   card.style.backgroundColor =
    //     "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
    // };
  });
}

// Function to display specific movie details
function displayMovieDetails(movie) {
  // Clear the current content
  toDisplayContainer.innerHTML = "";

  // Create movie detail elements
  const moviePageContainer = document.createElement("div");
  moviePageContainer.classList.add("movie-page-container");
  const moviePageDetail = document.createElement("div");
  moviePageDetail.classList.add("movie-page-detail");
  const moviePageImg = document.createElement("div");
  moviePageImg.classList.add("movie-page-img");

  const img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  img.alt = movie.title;
  img.className = "movie-detail-img";

  const title = document.createElement("h1");
  title.innerText = movie.title;

  const overview = document.createElement("p");
  overview.innerText = movie.overview;

  // Create a back button
  const backButton = document.createElement("button");
  backButton.innerText = "Back";
  backButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });

  // Append elements to detail container
  moviePageImg.appendChild(img);
  moviePageDetail.appendChild(title);
  moviePageDetail.appendChild(overview);
  moviePageDetail.appendChild(backButton);
  moviePageContainer.appendChild(moviePageImg);
  moviePageContainer.appendChild(moviePageDetail);

  const moviePageSimilarMovie = document.createElement("div");
  moviePageSimilarMovie.classList.add("movie-page-similar-movie");
  getSimilarMovie(moviePageSimilarMovie, movie.id);

  // Append detail container to 'to-display'
  toDisplayContainer.appendChild(moviePageContainer);
  toDisplayContainer.appendChild(moviePageSimilarMovie);
}

function getSimilarMovie(container, id) {
  const api_URI_similar = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
  fetchMovies(container, api_URI_similar);
}
