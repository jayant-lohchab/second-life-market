import React, { useRef } from "react";
import { useState } from "react";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";

// Import your images here
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";

const HomeMaster = () => {
  const picsContainerRef = useRef(null);
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Define your image array
  const images = [img1, img2, img3, img4, img5];

  const scrollLeft = () => {
    const container = picsContainerRef.current;

    if (!container) return;

    container.scrollLeft -= container.offsetWidth / 2; // Scroll half of the container width
  };

  const scrollRight = () => {
    const container = picsContainerRef.current;

    if (!container) return;

    container.scrollLeft += container.offsetWidth / 2; // Scroll half of the container width
  };

  const handleSubmit = (e) => {
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);
  };

  return (
    <>
      <div className={classes.main}>
        <div className={classes.mainWrapper}>
          <h1>You deserve a comfortable life</h1>
          <p>
            We have made quality our habit. It’s not something that we just
            strive for – we live by this principle every day.
          </p>
          <button onClick={() => navigate("/listings")}>Our store</button>
        </div>
      </div>

      <div className={classes.picsContainer}>
        <button
          className={`${classes.navButton} ${classes.leftButton}`}
          onClick={scrollLeft}
        >
          &lt; {/* Left arrow symbol */}
        </button>
        <div ref={picsContainerRef} className={classes.pics}>
          <div className={classes.picTransparent}></div>
          {images.map((image, index) => (
            <div className={classes.pic} key={index}>
              <img src={image} alt={`Img ${index + 1}`} />
            </div>
          ))}
          <div className={classes.picTransparent}></div>
        </div>
        <button
          className={`${classes.navButton} ${classes.rightButton}`}
          onClick={scrollRight}
        >
          &gt; {/* Right arrow symbol */}
        </button>
      </div>

      <form className={classes.formclass}>
        <div className={classes.form1}>
          <div className={classes.form1Wrapper}>
            <h1>Have a question?</h1>
            <p>Leave your e-mail and we will contact you soon</p>
          </div>
        </div>
        <form className={classes.form2}>
          <div className={classes.formGroup}>
            <label htmlFor="fname">First Name
            <input
              id="fname"
              onChange={(e) => setFname(e.target.value)}
              placeholder="Your name"
              type="text"
            />
            </label>
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="lname">Last Name
            <input
              id="lname"
              onChange={(e) => setLname(e.target.value)}
              placeholder="Your last name"
              type="text"
            />
            </label>
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="email">Your Email
            <input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              type="text"
            />
            </label>
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="message">Enter Message
            <textarea
              id="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
            ></textarea>
            </label>
          </div>
          <div className={classes.formbtn}>
            <button onClick={handleSubmit}>Contact Me</button>
          </div>
        </form>
      </form>
    </>
  );
};

export default HomeMaster;
