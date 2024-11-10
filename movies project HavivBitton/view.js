import { getMovieCast, getSimilarMovie } from "./main.js";
import {
  searchMoviesByID,
  searchMoviesByText,
  addMovieToFavorite,
  removeMovieToFavorite,
  saveFavoriteToLocalStorage,
  isFavorite,
  removeFavoriteFromLocalStorage,
} from "./controller.js";

// DOM Element
const toDisplayContainer = document.querySelector(".main-container");
const searchResultsContainer = document.getElementById("searchResults");

// Function to create and display card for each movie
function displayMovies(container, moviesArray, numberOfMovieToDisplay) {
  if (!moviesArray.length) {
    container.innerHTML = "No Favorite Movie yet";
  }
  moviesArray.slice(0, numberOfMovieToDisplay).forEach((movie) => {
    // Create card element
    const card = document.createElement("div");
    card.id = movie.id;
    card.className = "swiper-slide movie-card";
    card.innerHTML = `
       <img class="movie-img" src=${`"https://image.tmdb.org/t/p/w500${movie.poster_path}"`} alt="${
      movie.title
    }" />
         <div class="card-movie-details"><h3>${movie.title}</h3></div>
         `;

    container.appendChild(card);

    // Add click event to show specific movie details
    card.addEventListener("click", () => displayMoviePage(movie));

    // img.onload = () => {
    //   const colorThief = new ColorThief();
    //   const rgb = colorThief.getColor(img); // Get dominant color as [r, g, b] array
    //   let rgb = getAverageRGB(img);
    //   card.style.backgroundColor =
    //     "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
    // };
  });
}

// Function to create and display specific movie page
function displayMoviePage(movie) {
  // Clear the current content
  toDisplayContainer.innerHTML = "";

  // Create movie detail elements
  const moviePageContainer = document.createElement("div");
  moviePageContainer.classList.add("movie-page-container");
  const moviePageDetail = document.createElement("div");
  moviePageDetail.classList.add("movie-page-detail");
  const moviePageImg = document.createElement("div");
  moviePageImg.classList.add("movie-page-img");

  moviePageImg.innerHTML = `
   <img class="movie-detail-img" src=${`"https://image.tmdb.org/t/p/w500${movie.poster_path}"`} alt="${
    movie.title
  }" />
  `;
  moviePageDetail.innerHTML = `
  <h1>${movie.title}</h1>
  <p>${movie.overview}</p>
  `;

  // Create a Favorite button
  const heartIcon = document.createElement("div");
  heartIcon.classList.add("heart-icon");
  if (isFavorite(movie.id)) heartIcon.classList.add("full");
  heartIcon.addEventListener("click", () => {
    heartIcon.classList.toggle("full");
    if (!heartIcon.classList.contains("full")) {
      removeMovieToFavorite(movie.id);
      removeFavoriteFromLocalStorage(movie.id);
    } else {
      saveFavoriteToLocalStorage(movie.id);
      addMovieToFavorite(movie.id);
    }
  });

  // Create a back button
  const backButton = document.createElement("div");
  backButton.classList.add("back-icon");
  backButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });

  // Append elements to detail container
  moviePageDetail.appendChild(heartIcon);
  moviePageDetail.appendChild(backButton);
  moviePageContainer.appendChild(moviePageImg);
  moviePageContainer.appendChild(moviePageDetail);

  // ADD cast list
  const moviePageMovieCast = document.createElement("div");
  moviePageMovieCast.classList.add("movie-page-movie-cast");
  moviePageMovieCast.innerHTML = ` <h3 id="cast-title"> cast:</h3> `;
  const moviePageCastContainer = document.createElement("div");
  moviePageCastContainer.classList.add("movie-page-cast-container");
  getMovieCast(moviePageCastContainer, movie.id);
  moviePageMovieCast.appendChild(moviePageCastContainer);

  const moviePageSimilarMovie = document.createElement("div");
  moviePageSimilarMovie.classList.add("movie-page-similar-movie");
  moviePageSimilarMovie.innerHTML = `<h3 id="similar-title"> Similar Movie:</h3>`;
  const moviePageSimilarContainer = document.createElement("div");
  moviePageSimilarContainer.classList.add("movie-page-Similar-container");
  getSimilarMovie(moviePageSimilarContainer, movie.id);
  moviePageSimilarMovie.appendChild(moviePageSimilarContainer);

  // Append detail container to 'to-display'
  toDisplayContainer.appendChild(moviePageContainer);
  toDisplayContainer.appendChild(moviePageMovieCast);
  toDisplayContainer.appendChild(moviePageSimilarMovie);
}

// Function to create and display similar movies list
function displayCast(container, actorsArray) {
  actorsArray.slice(0, 10).forEach((actor) => {
    // Create actor card element
    const card = document.createElement("div");
    card.id = actor.id;
    card.className = "actor-card";

    // Create actor image element
    const img = document.createElement("img");
    if (actor.profile_path) {
      img.src = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    } else {
      img.src = "../image/FS_Lohamim_3-266.jpg";
    }

    img.alt = actor.name;
    img.className = "actor-img";

    // Create actor details element
    const details = document.createElement("div");
    details.className = "actor-details";
    details.innerHTML = `<h3>${actor.name}</h3> ${actor.character}`;

    card.appendChild(img);
    card.appendChild(details);
    container.appendChild(card);
  });
}

// Function that display the search result
async function displaySearchResults(query) {
  searchResultsContainer.innerHTML = "";
  // Check if the input is number or string
  if (!isNaN(query)) {
    const movie = await searchMoviesByID(query);
    searchResultsContainer.style.display = "block";
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
        displayMoviePage(movie);
        searchInput.value = "";
        searchResultsContainer.style.display = "none";
      });
    }
  } else {
    const movies = await searchMoviesByText(query);
    searchResultsContainer.style.display = "block";
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
          displayMoviePage(movie);
          searchInput.value = "";
          searchResultsContainer.style.display = "none";
        });
      });
    }
  }
}

export { displayMovies, displayCast, displaySearchResults };
