import React, { useState } from "react";
import classes from "../components/main.module.css";
import StepOne from "../components/forms/stepOne";
import StepTwo from "../components/forms/stepTwo";

const SellPage = () => {
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    category: "",
    brand: "",
    adtitle: "",
    desc: "",
    price: "",
    images: [],
    location: "",
    name: "",
    mobileno: "",
    email: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  const handleCategorySelect = (selectedCategory) => {
    setFormData({ ...formData, category: selectedCategory });
    nextStep();
  };

  const handleStepTwoChange = (updatedData) => {
    setFormData({ ...formData, ...updatedData });
  };

  const handleSubmit = () => {
    // Combine data and send or process as needed
    console.log(formData);
  };

  // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div>
          <StepOne
            onSelectCategory={handleCategorySelect}
            selectedCategory={formData.category}
          />
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className={classes.sellPageWrapper}>
          <StepTwo
            prevStep={prevStep}
            setFormData={setFormData}
            formData={formData}
            onChange={handleStepTwoChange}
            onSubmit={handleSubmit}
          />
        </div>
      );
    // default case to show nothing
    default:
      return <div></div>;
  }
};

export default SellPage;
