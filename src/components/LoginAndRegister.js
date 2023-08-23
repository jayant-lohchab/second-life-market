import React from "react";
import Card from "./utils/Card";
// import classes from "./LoginAndRegister.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/AccountSlice";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginAndRegister = () => {
  const isUser = useSelector((state) => state.accountStatus.isUser);
  const isLoggedIn = useSelector((state) => state.accountStatus.isLoggedIn);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  const tempLoggedIn = (
    <>
      <h1>Logged In</h1>
      <button onClick={logoutHandler}>logout</button>
    </>
  );
  return (
    <main>
      <Card>
        {isLoggedIn ? tempLoggedIn : isUser ? <LoginForm /> : <SignupForm />}
      </Card>
    </main>
  );
};

export default LoginAndRegister;
