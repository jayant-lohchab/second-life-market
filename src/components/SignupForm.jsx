import { useDispatch } from "react-redux";
import { isUserChange, register } from "../store/AccountSlice";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./LoginAndRegister.module.css";
import loginImg from '../assets/loginImage.jpg' 

const SignupForm = (setIsLoggedIn) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });

  const isUserhandler = (event) => {
    event.preventDefault();
    dispatch(isUserChange());
  };

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const [showPassword, setShowPassword] = useState({
    createPassword: false,
    confirmPassword: false,
  });

  const handleClick = (buttonName) => {
    setShowPassword({
      ...showPassword,
      [buttonName]: !showPassword[buttonName],
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.createPassword !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const finalData = {
      ...formData,
    };

    dispatch(register(finalData));

    alert("Account Create Successfull");

    navigate("/dashboard");
  };

  return (
    <>
      <div className={classes.loginregisterWrapper}>
        <div className={classes.loginregisterMain}>
          <div className={classes.loginregisterImage}>
            <img alt="" src={loginImg} />
          </div>
          <form className={classes.registerPage} onSubmit={submitHandler}>
            <div className={classes.loginToggleBtns}>
              <button className={classes.signupBtn}>Sign Up</button>
              <button onClick={isUserhandler} className={classes.loginBtn}>
                Login
              </button>
            </div>

            <div className={classes.inputBox}>
              <label>First Name</label>

              <input
                required
                type="text"
                name="firstName"
                id="firstName"
                onChange={changeHandler}
                value={formData.firstName}
              />
            </div>

            <div className={classes.inputBox}>
              <label>Last Name</label>

              <input
                required
                type="text"
                name="lastName"
                id="lastName"
                onChange={changeHandler}
                value={formData.lastName}
              />
            </div>

            <div className={classes.inputBox}>
              <label>Email Address</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={changeHandler}
              />
            </div>

            <div>
              <div className={classes.inputBox}>
                <label>Create Password</label>
                <input
                  required
                  type={showPassword.createPassword ? "text" : "password"}
                  name="createPassword"
                  id="createPassword"
                  onChange={changeHandler}
                  value={formData.createPassword}
                />

                <span
                  className={classes.eyelogo}
                  style={{ display: "none" }}
                  onClick={() => handleClick("createPassword")}
                >
                  {showPassword.createPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </div>
            </div>

            <div className={classes.inputBox}>
              <label>Confirm Password</label>
              <input
                required
                type={showPassword.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                onChange={changeHandler}
                value={formData.confirmPassword}
              />

              <span
                className={classes.eyelogo}
                style={{ display: "none" }}
                onClick={() => handleClick("confirmPassword")}
              >
                {showPassword.confirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>

            <button className={classes.loginSinupBtn}>Create Account</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
