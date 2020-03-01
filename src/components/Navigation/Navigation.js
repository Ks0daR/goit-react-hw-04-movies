import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => (
  <ul className ={styles.List}>
    <li className ={styles.ListItem}>
      <NavLink
        exact
        to={routes.HomePage}
        className={styles.menuItem}
        activeClassName={styles.menuItemActive}
      >
        Home
      </NavLink>
    </li>
    <li className ={styles.ListItem}>
      <NavLink
        to={routes.MoviesPage}
        className={styles.menuItem}
        activeClassName={styles.menuItemActive}
      >
        Movies Page
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
