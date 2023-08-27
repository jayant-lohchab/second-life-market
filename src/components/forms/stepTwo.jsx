
import React from "react";
import classes from "../main.module.css"; 

const StepTwo = ({ prevStep, setFormData, formData, onChange, onSubmit }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === "price" ? parseInt(value, 10) : value;
    onChange({ [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    setFormData({
      category: "",
      contactEmail: "",
      description: "",
      image: "",
      location: "",
      name: "",
      price: 0,
      sellerName: "",
    });
  };

  function backHandler() {
    prevStep();
  }

  return (
    <div style={{height:'100vh'}}>
      <div className={classes.stepTwoWrapper}>
      <form className={classes.steptwoform} onSubmit={handleSubmit}>


        <div className={classes.sellFormWrapper}>
        <label className={classes.stepTwoformLabel}>
          Your Contact Email
          <input
            className={classes.stepTwoformInput}
            type="text"
            required
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleInputChange}
            p
          />
        </label>
       
        
        <label  className={classes.stepTwoformLabel}>
          Your Name
          <input
           className={classes.stepTwoformInput}
            type="text"
            required
            name="sellerName"
            value={formData.sellerName}
            onChange={handleInputChange}
          />
        </label>
        </div>
        <div className={classes.sellFormWrapper}>

        <label  className={classes.stepTwoformLabel}>
          Product Name
          <input
           className={classes.stepTwoformInput}
            type="text"
            required
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>

        <label  className={classes.stepTwoformLabel}>
          Price(in inr)
          <input
           className={classes.stepTwoformInput}
            type="number"
            required
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>

        
        </div>
        
        
        
        <div className={classes.sellFormWrapper}>
        
        
        <label  className={classes.stepTwoformLabel}>
          Your Location
          <input
           className={classes.stepTwoformInput}
            type="text"
            required
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </label>
        
        <label  className={classes.stepTwoformLabel}>
          Description of the product
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleInputChange}
            className={classes.stepTwoformInput}
          />
        </label>
        
        </div>


        <label  className={classes.stepTwoformLabel}>
          Upload Image
          <input 
          className={classes.stepTwoformInput}
          type="file"
          accept="image/*"
          required
          name="image"
          value={formData.image}
          onChange={handleInputChange} 
          />
        </label>
        
       
       
        

        
        <div className={classes.buttonsWrapper}>
          <button className={classes.submitButtonSellTwo}>Submit</button>
          <button className={classes.backButtonSellTwo} onClick={backHandler}>
            Back
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default StepTwo;