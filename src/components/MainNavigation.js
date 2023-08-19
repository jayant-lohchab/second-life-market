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
      <>
      <div className={classes.sidebarWrapper}>
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
      </div>
      </div>
      </>}
      <nav>
        
        <div className={classes.navList}>
          <div className={classes.headerLeft}>
          

          <div className={classes.sidebarLogo} onClick={sidebarToggle}><i className="fas fa-bars"></i></div>
          <div className={classes.mainLogo}>Website Logo *</div>
          </div>
            
           <ul>
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
          <div class={classes.sesarchContainer}>
               <input type="text" className={classes.searchInput} placeholder="Search..." />
               
               <button class={classes.searchButton}>
                 Search
               </button>
             </div>
          <li>
            <NavLink
              to="listings"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Listings
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
          {/* <li>
            <NavLink
              to=":userId"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              User Profile
            </NavLink>
          </li> */}
          <li className={classes.loginSignup}>
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Login <span>/ Sign Up </span>
            </NavLink>
          </li>
        </ul>
      </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
