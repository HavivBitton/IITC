import API_KEY from "./env.js";
const accountID = 21570547;

async function searchMoviesByText(query) {
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

async function addMovieToFavorite(movieID) {
  console.log(movieID);
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjk2MDhiYjdkZDEzNjM1MTk5NGU4NWQxNGFkMjIxMyIsIm5iZiI6MTczMTIzMjU3OS45MjA2Mzc2LCJzdWIiOiI2NzBjZTU5MTQxMTFiZTRmMDI3NTEwMWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jcD4HhqZ5vipFVj6srR1zL3fq7lQF-oQl9-JL1UAqXE",
    },
    body: JSON.stringify({
      media_type: "movie",
      media_id: `${movieID}`,
      favorite: true,
    }),
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/account/21570547/favorite",
      options
    );
    const data = await response.json();
    console.log(data, "successfully added");
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}
async function removeMovieToFavorite(movieID) {
  console.log(movieID);
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjk2MDhiYjdkZDEzNjM1MTk5NGU4NWQxNGFkMjIxMyIsIm5iZiI6MTczMTIzMjU3OS45MjA2Mzc2LCJzdWIiOiI2NzBjZTU5MTQxMTFiZTRmMDI3NTEwMWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.jcD4HhqZ5vipFVj6srR1zL3fq7lQF-oQl9-JL1UAqXE",
    },
    body: JSON.stringify({
      media_type: "movie",
      media_id: `${movieID}`,
      favorite: false,
    }),
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/account/21570547/favorite",
      options
    );
    const data = await response.json();
    console.log(data, "successfully removed");
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

let favoriteArray = new Set(JSON.parse(localStorage.getItem("movieIDs")) || []);

function saveFavoriteToLocalStorage(id) {
  favoriteArray.add(id);
  localStorage.setItem("movieIDs", JSON.stringify([...favoriteArray]));
  console.log(favoriteArray);
}

function removeFavoriteFromLocalStorage(id) {
  favoriteArray.delete(id);
  localStorage.setItem("movieIDs", JSON.stringify([...favoriteArray]));
  console.log(favoriteArray);
}

function isFavorite(id) {
  const savedIDs = JSON.parse(localStorage.getItem("movieIDs")) || [];
  return savedIDs.includes(id);
}

export {
  searchMoviesByID,
  searchMoviesByText,
  addMovieToFavorite,
  removeMovieToFavorite,
  saveFavoriteToLocalStorage,
  removeFavoriteFromLocalStorage,
  isFavorite,
};
