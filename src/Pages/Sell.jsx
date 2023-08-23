import React, { useState } from "react";
import classes from "../components/main.module.css";
import StepOne from "../components/forms/stepOne";
import StepTwo from "../components/forms/stepTwo";

const SellPage = () => {
  const [step, setstep] = useState(1);
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
  const nextStep = () => {
    setstep(step + 1);
  };
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
    console.log(formData);
  };
  switch (step) {
    case 1:
      return (
        <div >
          <StepOne
            onSelectCategory={handleCategorySelect}
            selectedCategory={formData.category}
          />
        </div>
      );
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
    default:
      return <div></div>;
  }
};

export default SellPage;
