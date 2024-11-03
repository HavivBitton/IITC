import API_KEY from "./env.js";

// DOM Element
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

  const moviePageMovieCast = document.createElement("div");
  moviePageMovieCast.classList.add("movie-page-movie-cast");
  getMovieCast(moviePageMovieCast, movie.id);

  const moviePageSimilarMovie = document.createElement("div");
  moviePageSimilarMovie.classList.add("movie-page-similar-movie");
  getSimilarMovie(moviePageSimilarMovie, movie.id);

  // Append detail container to 'to-display'
  toDisplayContainer.appendChild(moviePageContainer);
  toDisplayContainer.appendChild(moviePageMovieCast);
  toDisplayContainer.appendChild(moviePageSimilarMovie);
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

function displayCast(container, actorsArray) {
  container.innerHTML = ""; // Clear container first
  actorsArray.forEach((actor) => {
    // Create actor card element
    const card = document.createElement("div");
    card.id = actor.id;
    card.className = "actor-card";

    // Create actor image element
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    img.alt = actor.name;
    img.className = "actor-img";

    // Create actor details element
    const details = document.createElement("div");
    details.className = "actor-details";
    details.innerHTML = `<h3>${actor.name}</h3> /n <h3>${actor.character}</h3>`;

    card.appendChild(img);
    card.appendChild(details);
    container.appendChild(card);
  });
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
      const movies = await searchMovies(query);
      searchResultsContainer.style.display = "block";
      displaySearchResults(movies);
    }
  } else {
    searchResultsContainer.style.display = "none";
  }
});

async function searchMovies(query) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
  }
}

async function searchMoviesByID(id) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error searching movies:", error);
  }
}

function displaySearchResults(movies) {
  searchResultsContainer.innerHTML = "";
  if (movies.length === 0) {
    const listItem = document.createElement("li");
    listItem.innerHTML = " Not movie found";
    searchResultsContainer.appendChild(listItem);
  } else {
    movies.slice(0, 10).forEach((movie) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
    <p>${movie.title}</p>
    `;
      searchResultsContainer.appendChild(listItem);
      listItem.addEventListener("click", () => {
        displayMovieDetails(movie);
        searchInput.value = "";
        searchResultsContainer.style.display = "none";
      });
    });
  }
}

function displaySearchResultsByID(movie) {
  console.log(movie);

  searchResultsContainer.innerHTML = "";
  if (movie.success === false) {
    const listItem = document.createElement("li");
    listItem.innerHTML = " Not movie found";
    searchResultsContainer.appendChild(listItem);
    return;
  } else {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.original_title}">
    <p>${movie.original_title}</p>
    `;
    searchResultsContainer.appendChild(listItem);
    listItem.addEventListener("click", () => {
      displayMovieDetails(movie);
      searchInput.value = "";
      searchResultsContainer.style.display = "none";
    });
  }
}
