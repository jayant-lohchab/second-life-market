import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css"; // Import the module stylesheet using 'classes'
import { useState } from "react";

const MainNavigation = () => {

  const [sidebar , setSidebar] = useState(false)
  const sidebarToggle =() =>{
       setSidebar(!sidebar)
  }
  return (
    <header className={classes.header}>

      {sidebar && 
      
      <div className={classes.sidebar}>
        <ul>

          <button onClick={sidebarToggle} className={classes.toggleButton}> <i className="fas fa-times"></i></button>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
          <li>Six</li>
          <li>Seven</li>
          <li>Eight</li>
          <li>Nine</li>
          <li>Ten</li>
        </ul>
      </div>}
      <nav>
        
        <ul className={classes.navList}>

          <div className={classes.sidebarLogo} onClick={sidebarToggle}><i className="fas fa-bars"></i></div>


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
          <li>
            <NavLink
              to="listings"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Temp users list
            </NavLink>
          </li>
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
          <li>
            <NavLink
              to="signup"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
