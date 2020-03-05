import React from 'react';
import styles from './Rewiew.module.css';
import PropTypes from 'prop-types';

function Rewiew({ results }) {
  return (
    <div className={styles.CardList}>
      {results.map(({ author, content }) => (
        <div key={author} className={styles.Card}>
          <h4>{author}</h4>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
}

Rewiew.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Rewiew;
