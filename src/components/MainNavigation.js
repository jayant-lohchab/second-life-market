import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css"; // Import the module stylesheet using 'classes'
import { useState } from "react";
import logoImg from "../assets/second-life-icon.jpg"
// import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";



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
      <button className={classes.helloUserBtn}>Hello (username)</button>
        <ul>

          <button onClick={sidebarToggle} className={classes.toggleButton}> <i className="fas fa-times"></i></button>
            <NavLink
              to="listings"
             >
              <li onClick={sidebarToggle}>
                Buy ?
              </li>
            </NavLink>


            
            <NavLink
              to="sell"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <li style={{marginBottom:'40px'}} onClick={sidebarToggle}>
              Sell ?
              </li>
            </NavLink>
          
            <NavLink
              to="cart"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
            <li onClick={sidebarToggle}>Your Orders</li>
            </NavLink>

            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
            <li onClick={sidebarToggle}>About Us</li>
            </NavLink>
          <li onClick={sidebarToggle}>Contact Us</li>
          <li onClick={sidebarToggle}>Any Queries ?</li>
          <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
          <li onClick={sidebarToggle}>Login / Signup </li>
          </NavLink>
          
        </ul>

      
      </div>
      </div>
      </>}
      <nav>
        
        <div className={classes.navList}>
          <div className={classes.headerLeft}>
          

          <div className={classes.sidebarLogo} onClick={sidebarToggle}><i className="fas fa-bars"></i></div>
          <div className={classes.mainLogo}>
            <img src={logoImg} alt="WebsiteLogo" />
          </div>
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
          {/* <div class={classes.sesarchContainer}>
               <input type="text" className={classes.searchInput} placeholder="Search..." />
               
               <button class={classes.searchButton}>
                 Search
               </button>
            </div> */}
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
          <li> 
            <NavLink
              to="cart"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="sell"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Sell Item
            </NavLink>
          </li>
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
