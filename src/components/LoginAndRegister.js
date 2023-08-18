import React from "react";
import Card from "./utils/Card";
import classes from "./LoginAndRegister.module.css";
import { useSelector,useDispatch } from "react-redux";
import { accountActions } from "../store/loginInfo";
import loginImage from '../assets/loginImage.jpg'
const LoginAndRegister = () => {
  const dispatch = useDispatch();
  const isUser = useSelector(state=>state.accountReducers.isUser);
  const isLoggedIn = useSelector(state=>state.accountReducers.isLoggedIn);
  const usersList = useSelector(state=>state.accountReducers.accounts)
    const changeToLoginHandler = (event)=>{
        event.preventDefault();
        dispatch(accountActions.isUserChange());
    }
    const changeToRegisterHandler = (event)=>{
        event.preventDefault();
        dispatch(accountActions.isUserChange());
    }
    const loginhandler = (event)=>{
      event.preventDefault();
      dispatch(accountActions.login());
    }
    const logoutHandler = (event)=>{
      event.preventDefault();
      dispatch(accountActions.logout());
    }
    const registerHandler = (event)=>{
      const {username,email,password} = event.target;
      dispatch(accountActions.register({username:username.value,email:email.value,password:password.value}));
      console.log(usersList);

    }
  const login = (
    <form className={classes.loginPage}>
      <h3 className={classes.loginHeading}>LOGIN</h3>
      <div className={classes.inputBox}>
        <label>Username</label>
        <input />
      </div>
      <div className={classes.inputBox}>
        <label>Password</label>
        <input />
      </div>
      <button className={classes.loginPageBtns} onClick={loginhandler}>Login</button>
      <button className={classes.loginPageBtns} onClick={changeToRegisterHandler}>New User?</button>
    </form>
  );
  const register = (
    <form className={classes.registerPage} onSubmit={registerHandler}>
      <h3 className={classes.loginHeading}>REGISTER</h3>

      <div className={classes.inputBox}>
        <label>Enter your Name</label>
        <input name="username" />
      </div>
      <div className={classes.inputBox}>
        <label>Enter your email</label>
        <input name="email" />
      </div>
      <div className={classes.inputBox}>
        <label>Enter password</label>
        <input name="password" />
      </div>
      <div className={classes.inputBox}>
        <label>Confirm your password</label>
        <input name="password"/>
      </div>
      <button className={classes.loginPageBtns} type="submit">Register</button>
      <button className={classes.loginPageBtns} onClick={changeToLoginHandler}>Already a user</button>
    </form>
  )
  const tempLoggedIn = (<>
  <h1> The user is Logged in </h1>
  <button className={classes.loginPageBtns} onClick={logoutHandler}>LogOut</button>
  </>)
  return (
    <div className={classes.loginregisterWrapper}>

    <div className={classes.loginregisterMain}>
      <div className={classes.loginregisterImage}> 
      <img src={loginImage} />
      </div>
      {isLoggedIn ? tempLoggedIn : <Card className={classes.formPage}>{isUser ? login:register}</Card>}
    </div>
    </div>
  );
};

export default LoginAndRegister;
