import React from "react";
import classes from "../main.module.css";

const StepTwo = ({
  prevStep,
  setFormData,
  formData,
  onChange,
  onSubmit,
  selectedcategory,
}) => {
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
    <div style={{ minHeight: "100vh" }}>
      <div className={classes.stepTwoWrapper}>
        <form className={classes.steptwoform} onSubmit={handleSubmit}>
          {selectedcategory === "Vehicle" && (
            <>
              <div className={classes.sellFormWrapper}>
                <label className={classes.stepTwoformLabel}>
                  Brand
                  <input
                    className={classes.stepTwoformInput}
                    type="text"
                    required
                  />
                </label>

                <label className={classes.stepTwoformLabel}>
                  Model Year
                  <input
                    className={classes.stepTwoformInput}
                    type="text"
                    required
                  />
                </label>
              </div>
              <div className={classes.sellFormWrapper}>
                <label className={classes.stepTwoformLabel}>
                  Km's driven
                  <input
                    style={{ width: "46.5%", display: "block" }}
                    className={classes.stepTwoformInput}
                    type="text"
                    required
                  />
                </label>
              </div>
            </>
          )}
          {selectedcategory === "Property" && (
            <>
              <div className={classes.sellFormWrapper}>
                <label className={classes.selectformLabel}>
                  Type of Property
                  <div className={classes.propertyTypeWrapper}>
                    <select className={classes.propertyTypeSelect}>
                      <option value="option1">Apartments</option>
                      <option value="option2">Builder Floors</option>
                      <option value="option3">Farm Houses</option>
                      <option value="option4">Plots</option>
                      <option value="option5">Houses</option>
                      <option value="option6">Commercial</option>
                    </select>
                  </div>
                </label>

                <label className={classes.selectformLabel}>
                  Listed By
                  <div className={classes.propertyTypeWrapper}>
                    <select className={classes.propertyTypeSelect}>
                      <option value="option1">Builder</option>
                      <option value="option2">Dealer</option>
                      <option value="option3">Owner</option>
                    </select>
                  </div>
                </label>
              </div>
              <div className={classes.sellFormWrapper}>
                <label className={classes.selectformLabel}>
                  Bedrooms
                  <div className={classes.propertyTypeWrapper}>
                    <select className={classes.propertyTypeSelect}>
                      <option value="option1">1</option>
                      <option value="option2">2</option>
                      <option value="option3">3</option>
                      <option value="option4">4</option>
                      <option value="option5">5</option>
                      <option value="option6">6</option>
                    </select>
                  </div>
                </label>

                <label className={classes.selectformLabel}>
                  Bathrooms
                  <div className={classes.propertyTypeWrapper}>
                    <select className={classes.propertyTypeSelect}>
                      <option value="option1">1</option>
                      <option value="option2">2</option>
                      <option value="option3">3</option>
                      <option value="option4">4</option>
                      <option value="option5">5</option>
                      <option value="option6">6</option>
                    </select>
                  </div>
                </label>
              </div>
              <div className={classes.sellFormWrapper}>
                <label className={classes.stepTwoformLabel}>
                  Facing
                  <input
                    className={classes.stepTwoformInput}
                    type="text"
                    required
                  />
                </label>

                <label className={classes.stepTwoformLabel}>
                  Total Floors
                  <input
                    className={classes.stepTwoformInput}
                    type="text"
                    required
                  />
                </label>
              </div>
              <div className={classes.sellFormWrapper}>
                <label className={classes.stepTwoformLabel}>
                  Super Builtup area (ft²) *
                  <input
                    className={classes.stepTwoformInput}
                    type="text"
                    required
                  />
                </label>
                <label className={classes.stepTwoformLabel}>
                  Carpet Area (ft²) *
                  <input
                    className={classes.stepTwoformInput}
                    type="text"
                    required
                  />
                </label>
              </div>
            </>
          )}
          {selectedcategory === "Mobile" && <div>mobile data</div>}
          {selectedcategory === "Electronics" && <div>electronic data</div>}
          {selectedcategory === "Furniture" && <div>Furniture data</div>}
          {selectedcategory === "Fashion" && <div>Fashion data</div>}
          {selectedcategory === "Books" && <div>Books data</div>}
          {selectedcategory === "Sports" && <div>Sports data</div>}

          <hr style={{ border: "1px solid grey", marginBottom: "25px" }} />
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

            <label className={classes.stepTwoformLabel}>
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
            <label className={classes.stepTwoformLabel}>
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

            <label className={classes.stepTwoformLabel}>
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
            <label className={classes.stepTwoformLabel}>
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

            <label className={classes.stepTwoformLabel}>
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

          <label className={classes.stepTwoFormLabel}>
            Enter Image URL
            <input
              className={classes.stepTwoformInput}
              type="text"
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
