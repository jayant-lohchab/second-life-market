import React from 'react';
import classes from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={classes.aboutUsContainer}>
      <div className={classes.aboutUsContent}>
        <h1>Welcome to Second Life Market</h1>
        <p>
          We believe in a sustainable future. Second Life Market is your platform to buy and sell used goods, giving items a second chance. We're on a mission to reduce waste and promote the reuse of valuable resources. Whether you're looking to declutter your space or find hidden treasures, we've got you covered. Join our community, and together, let's make the world a greener place, one transaction at a time.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
