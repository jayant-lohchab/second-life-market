import React from 'react';
import classes from '../main.module.css';
// import SellPage from '../../Pages/Sell';
import { useSelector } from 'react-redux';




const StepOne = ({ selectedCategory, onSelectCategory }) => {
  const { categories } = useSelector((state) => state.sellStatus);

  

  
   
  return (
    <>
    <div style={{minHeight:'100vh'}}>
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
                <div className={classes.sellArrow}>  </div>
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


















