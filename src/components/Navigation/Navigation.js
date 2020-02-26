import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => (
  <ul>
    <li>
      <NavLink
        exact
        to={routes.HomePage}
        className={styles.menuItem}
        activeClassName={styles.menuItemActive}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes.MoviesPage}
        className={styles.menuItem}
        activeClassName={styles.menuItemActive}
      >
        MoviesPage
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
