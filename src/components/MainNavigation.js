import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css"; // Import the module stylesheet using 'classes'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.navList}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="listings"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Listings
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink
              to="sell"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Sell Item
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink
              to="watchList"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              WatchList
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to=":userId"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              User Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
