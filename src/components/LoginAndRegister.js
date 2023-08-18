import React from "react";
import Card from "./utils/Card";
import classes from "./LoginAndRegister.module.css";
import { useSelector,useDispatch } from "react-redux";
import { accountActions } from "../store/loginInfo";
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
      <div className={classes.username}>
        <label>Username</label>
        <input />
      </div>
      <div className={classes.username}>
        <label>Password</label>
        <input />
      </div>
      <button className={classes.loginPageBtns} onClick={loginhandler}>Login</button>
      <button className={classes.loginPageBtns} onClick={changeToRegisterHandler}>New User?</button>
    </form>
  );
  const register = (
    <form className={classes.registerPage} onSubmit={registerHandler}>
      <div className={classes.username}>
        <label>Enter a Username</label>
        <input name="username" />
      </div>
      <div className={classes.username}>
        <label>Enter Your email</label>
        <input name="email" />
      </div>
      <div className={classes.username}>
        <label>Enter a password</label>
        <input name="password" />
      </div>
      <div className={classes.username}>
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
    <div className={classes.loginregisterMain}>
      <div className={classes.loginregisterImage}> 
      <img src='' />
      </div>
      {isLoggedIn ? tempLoggedIn : <Card className={classes.formPage}>{isUser ? login:register}</Card>}
    </div>
  );
};

export default LoginAndRegister;
