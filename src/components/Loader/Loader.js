import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

export default class App extends Component {
  render() {
    return (
      <Loader
        className={styles.Loader}
        type="BallTriangle"
        color="#2ED76E"
        height={80}
        width={80}
        timeout={2000}
      />
    );
  }
}
