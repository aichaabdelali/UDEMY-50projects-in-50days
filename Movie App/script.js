const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cb56581cd73993b93e4cd062650225b9&page=1";
const IMG_URL = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=cb56581cd73993b93e4cd062650225b9&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

//TODO = add a event listener where is goes to a single page for one movie

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

function showMovie(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <img
      src="${IMG_URL + poster_path}"
      alt="${title}"
      />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>`;

    main.appendChild(movieEl);
  });
}

async function getMovie(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovie(data.results);
}

//get movies
getMovie(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovie(SEARCH_URL + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
