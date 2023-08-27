import React from 'react';
import classes from '../main.module.css';
import SellPage from '../../Pages/Sell';


const StepOne = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    "Vehicle",
    "Property",
    "Mobile",
    "Electronics",
    "Furniture",
    "Fashion",
    "Books",
    "Sports",
  ];

  return (
    <>
    <div style={{height:'100vh'}}>
    <div className={classes.sellHeader}>
        POST YOUR AD
      </div>
    <div className={classes.sellPageWrapper} style={{ backgroundColor: 'white' }}>
      

        <ul className={classes.categoryList}>
         <h5>Choose Category</h5>

          {categories.map((category, index) => (
            <label key={index} className={classes.categoryLabel}>
              <li
                className={`${classes.categoryItem} ${selectedCategory === category ? classes.selected : ''}`}
                onClick={() => onSelectCategory(category)}
              >
                {category}
                <div className={classes.sellArrow}> > </div>
              </li>
            </label>
          ))}
        </ul>
      </div>
    
    </div>
    </>
  );
};

export default StepOne;


















