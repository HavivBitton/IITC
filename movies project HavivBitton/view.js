import { getMovieCast, getSimilarMovie, addMovieToFavorite } from "./main.js";

// DOM Element
const toDisplayContainer = document.getElementById("to-display");

// Function to create a card for each movie
function displayMovies(container, moviesArray) {
  container.innerHTML = ""; // Clear container first
  moviesArray.forEach((movie) => {
    // Create card element
    const card = document.createElement("div");
    card.id = movie.id;
    card.className = "movie-card";
    card.innerHTML = `
       <img class="movie-img" src=${`"https://image.tmdb.org/t/p/w500${movie.poster_path}"`} alt="${
      movie.title
    }" />
         <div class="card-movie-details"><h3>${movie.title}</h3></div>
         <div class="heart-icon" id="heart"></div>
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

// Function to display specific movie page
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
  heartIcon.addEventListener("click", () => {
    heartIcon.classList.toggle("full");
    addMovieToFavorite(movie);
  });

  // Create a back button
  const backButton = document.createElement("button");
  backButton.innerText = "Back";
  backButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });

  // Append elements to detail container
  moviePageDetail.appendChild(backButton);
  moviePageDetail.appendChild(heartIcon);
  moviePageContainer.appendChild(moviePageImg);
  moviePageContainer.appendChild(moviePageDetail);

  // ADD cast list
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
        displayMoviePage(movie);
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
      displayMoviePage(movie);
      searchInput.value = "";
      searchResultsContainer.style.display = "none";
    });
  }
}

export {
  displayMovies,
  displayCast,
  displaySearchResults,
  displaySearchResultsByID,
};