import React from "react";
import Card from "./utils/Card";
import classes from "./LoginAndRegister.module.css";
import { useState } from "react";
const LoginAndRegister = () => {
    const [isLogin,setIsLogin] = useState(false);
    const changeToLoginHandler = (event)=>{
        event.preventDefault();
        setIsLogin(true);
    }
    const changeToRegisterHandler = (event)=>{
        event.preventDefault();
        setIsLogin(false);
    }
  const login = (
    <>
      <div className={classes.username}>
        <label>Username</label>
        <input />
      </div>
      <div className={classes.username}>
        <label>Password</label>
        <input />
      </div>
      <button>Login</button>
      <button onClick={changeToRegisterHandler}>New User?</button>
    </>
  );
  const register = (
    <>
      <div className={classes.username}>
        <label>Enter a Username</label>
        <input />
      </div>
      <div className={classes.username}>
        <label>Enter Your email</label>
        <input />
      </div>
      <div className={classes.username}>
        <label>Enter a password</label>
        <input />
      </div>
      <div className={classes.username}>
        <label>Confirm your password</label>
        <input />
      </div>
      <button>Login</button>
      <button onClick={changeToLoginHandler}>Already a user</button>
    </>
  )
  return (
    <main>
      <Card>{isLogin ? login:register}</Card>
    </main>
  );
};

export default LoginAndRegister;
