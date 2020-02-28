import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MovieList extends Component {
  render() {
    console.log(this.props.match.url);
    return (
      <ul>
        {this.props.collectionMovies.map(result => (
          <li key={result.id}>
            <NavLink to={`${this.props.match.url}/${result.id}`}>
              <h5>{result.title}</h5>
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}
export default MovieList;
