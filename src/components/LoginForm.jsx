import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isUserChange, login } from "../store/AccountSlice";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

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

  const isUserhandler = (event)=>{
    event.preventDefault();
    dispatch(isUserChange());
  }

  function submitHandler(event) {
    event.preventDefault();
    dispatch(login());
    alert("Login Successful");
  }

  return (
    <form onSubmit={submitHandler} >
      <label className="w-full">
        <p>
          Email Address
          <sup className="text-pink-200">*</sup>
        </p>

        <input
          type="email"
          required
          value={formData.email}
          placeholder="Enter your email address"
          onChange={changeHandler}
          name="email"
        />
      </label>

      <label>
        <p>
          Password
          <sup>*</sup>
        </p>

        <input
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          placeholder="Enter Password"
          onChange={changeHandler}
          name="password"
        />

        <span onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>

      <button>Sign in</button>
      <button onClick={isUserhandler}>New User</button>
    </form>
  );
};

export default LoginForm;
