import React from 'react';
import PropTypes from 'prop-types';
import styles from './ReviewItemModule.css';

const ReviewItem = ({ author, content }) => (
  <div className={styles.Card}>
    <h4>{author}</h4>
    <p>{content}</p>
  </div>
);

ReviewItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
export default ReviewItem;
