import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getPopularityFilms } from '../utils/movieApi';

class HomePage extends Component {
  state = {
    popularFilms: '',
  };

  componentDidMount() {
    getPopularityFilms().then(popularFilms => this.setState({ popularFilms }));
  }

  render() {
    const { results } = this.state.popularFilms;
    const imgUrl = 'https://image.tmdb.org/t/p/w200/';
    return (
      <>
        {results && (
          <ul>
            {results.map(result => (
              <li key={result.id}>
                <h4>{result.title}</h4>
                <img src={`${imgUrl}${result.poster_path}`} />
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default HomePage;
