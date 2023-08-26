import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isUserChange, login } from "../store/AccountSlice";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import classes from "./LoginAndRegister.module.css";
/* import loginImg from "../assets/loginImage.jpg"; */
const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const isUserhandler = (event) => {
    event.preventDefault();
    dispatch(isUserChange());
  };

  function submitHandler(event) {
    event.preventDefault();
    dispatch(login());
    alert("Login Successful");
  }

  return (
    <>
      <div className={classes.loginregisterWrapper}>
        <div className={classes.loginregisterMain}>
          <div className={classes.loginregisterImage}>
            <img alt="" />
          </div>
          <form className={classes.loginPage} onSubmit={submitHandler}>
            <div className={classes.loginToggleBtns}>
              <button onClick={isUserhandler} className={classes.signupBtn}>
                Sign Up
              </button>
              <button className={classes.loginBtn} type="button">
                Login
              </button>
            </div>

            <div className={classes.inputBox}>
              <label className="w-full">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={changeHandler}
                name="email"
              />
            </div>

            <div className={classes.inputBox}>
              <label>Password</label>

              <input
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={changeHandler}
                name="password"
              />

              <span
                className={classes.eyelogo}
                style={{ display: "none" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>

              <Link className={classes.loginForgotPass} to="#">
                <p>Forgot Password ?</p>
              </Link>
            </div>

            <button className={classes.loginSinupBtn}>Log In</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
