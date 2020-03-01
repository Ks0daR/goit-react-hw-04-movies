import React from 'react';
import styles from './Layout.module.css';
import Navigation from '../Navigation';

const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <Navigation />
    {children}
  </div>
);

export default Layout;
