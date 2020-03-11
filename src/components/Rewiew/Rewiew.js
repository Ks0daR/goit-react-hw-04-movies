import React from 'react';
import ReviewItem from './ReviewItem';
import styles from './Rewiew.module.css';
import PropTypes from 'prop-types';

function Rewiew({ results }) {
  return (
    <div className={styles.CardList}>
      {results.map(({ author, content }) => (
        <ReviewItem key={author} author={author} content={content} />
      ))}
    </div>
  );
}

Rewiew.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Rewiew;
