import acyncComponent from './hoc/asyncComponent';
import Loader from './Loader';

const AsyncHomePage = acyncComponent({
  loader: () => import('../pages/HomePage'),
  loading: Loader,
});

const AsyncMoviesPage = acyncComponent({
  loader: () => import('../pages/MoviesPage'),
  loading: Loader,
});

const AsyncMovieDetailsPage = acyncComponent({
  loader: () => import('../pages/MovieDetailsPage'),
  loading: Loader,
});

const imgUrl = 'https://image.tmdb.org/t/p/w200/';

const errorImg =
  'http://chto-takoe-lyubov.net/wp-content/uploads/2017/08/voprositelnyy-znak-stikhi.jpg';

export {
  AsyncHomePage,
  AsyncMoviesPage,
  AsyncMovieDetailsPage,
  imgUrl,
  errorImg,
};
