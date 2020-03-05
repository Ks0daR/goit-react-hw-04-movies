import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ name }) {
  return (
    <button className={styles.Button} type="submit">
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
