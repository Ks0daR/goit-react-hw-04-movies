import React from 'react';
import styles from './Button.module.css';

function Button({ name }) {
  return (
    <button className={styles.Button} type="submit">
      {name}
    </button>
  );
}

export default Button;
