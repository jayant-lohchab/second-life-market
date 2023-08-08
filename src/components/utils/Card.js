import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.background}>
      <div className={classes.card}>
        <form>{props.children}</form>
      </div>
    </div>
  );
};

export default Card;
