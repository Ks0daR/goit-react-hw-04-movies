const baseUrl = 'https://api.themoviedb.org/3/';
function getPopularityFilms() {
  return fetch(
    `${baseUrl}discover/movie?sort_by=popularity.desc&api_key=bd2cd46f09d0c01b4fe8699d010953c1`,
  ).then(response => response.json());
}

function getFilmsByQuery(query, page) {
  return fetch(
    `${baseUrl}search/movie?api_key=bd2cd46f09d0c01b4fe8699d010953c1&language=en-US&query=${query}&page=${page}`,
  ).then(response => response.json());
}

function getFilmById(id) {
  return fetch(
    `${baseUrl}movie/${id}?api_key=bd2cd46f09d0c01b4fe8699d010953c1`,
  ).then(response => response.json());
}

function getMovieReviews(id) {
  return fetch(
    `${baseUrl}movie/${id}/reviews?api_key=bd2cd46f09d0c01b4fe8699d010953c1`,
  ).then(response => response.json());
}

function getMovieCredits(id) {
  return fetch(
    `${baseUrl}movie/${id}/credits?api_key=bd2cd46f09d0c01b4fe8699d010953c1`,
  ).then(response => response.json());
}
export {
  getPopularityFilms,
  getFilmsByQuery,
  getFilmById,
  getMovieReviews,
  getMovieCredits,
};
