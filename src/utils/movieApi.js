const baseUrl = 'https://api.themoviedb.org/3/';
function getPopularityFilms() {
  return fetch(
    `${baseUrl}discover/movie?sort_by=popularity.desc&api_key=bd2cd46f09d0c01b4fe8699d010953c1`,
  ).then(response => response.json());
}

export { getPopularityFilms };
