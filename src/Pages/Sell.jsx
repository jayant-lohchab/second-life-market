import React, { useState } from "react";
// import classes from "../components/main.module.css";
import StepOne from "../components/forms/stepOne";
import StepTwo from "../components/forms/stepTwo";
import { useNavigate } from "react-router-dom";


const SellPage = () => {
  const navigate = useNavigate();
  const [step, setstep] = useState(1);
  const [formData, setFormData] = useState({
    category: "",
    contactEmail:"",
    description:"",
    image:"",
    location:"",
    name:"",
    price:0,
    sellerName:"",
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

  const handleSubmit = async () => {
    const response = await fetch('https://second-market-ae292-default-rtdb.firebaseio.com/public/item_store.json',{
      method:'POST',
      body:JSON.stringify(formData)
    })
    if(!response.ok){
      throw new Error('sending new item failed');
    }
    setFormData({
      category: "",
      contactEmail:"",
      description:"",
      image:"",
      location:"",
      name:"",
      price:0,
      sellerName:"",
    });
    navigate("/listings");
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
        
          <StepTwo
            prevStep={prevStep}
            setFormData={setFormData}
            formData={formData}
            onChange={handleStepTwoChange}
            onSubmit={handleSubmit}
            selectedcategory={formData.category}
          />
        
      );
    default:
      return <div></div>;
  }
};

export default SellPage;
