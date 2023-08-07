import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainFooter.module.css';

const MainFooter = () => {
  return (
    <footer className={classes.mainFooter}>
      <div className={classes.footerContent}>
        <div className={classes.copyrightSection}>
          &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
        </div>
        <ul className={classes.footerLinks}>
          <li>
            <NavLink to="/about" className={classes.navLink}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={classes.navLink}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default MainFooter;
