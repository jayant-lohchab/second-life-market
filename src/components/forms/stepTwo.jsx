import { Form } from "react-router-dom";

const StepTwo = ({ prevStep, setFormData, formData, onChange, onSubmit }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newValue = name === "price" ? parseInt(value, 10) : value;
    onChange({ [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    onSubmit(); // Call the parent component's onSubmit function
    setFormData({
      category:"",
      contactEmail:"",
      description:"",
      image:"",
      location:"",
      name:"",
      price:0,
      sellerName:"",
    });
  };

  function backHandler() {
    prevStep();
  }

  return (
    <div style={{background:'white'}}>
      <Form onSubmit={handleSubmit}>
        <label>
          Your Contact Email
          <input
            type="text"
            required
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleInputChange}
            placeholder="Enter email"
          />
        </label>
        <br />
        <label>
          Description of the product
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter Description"
          />
        </label>
        
        <br />
        <label>
          Upload Image
          <input 
          type="text" 
          required
          name="image"
          value={formData.image}
          onChange={handleInputChange} 
          placeholder="Enter Image Url"
          />
        </label>
        <br />
        
        <label>
          Your Location
          <input
            type="text"
            required
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Enter location"
          />
        </label>
        <br />
        <label>
          Name of your product
          <input
            type="text"
            required
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter product Name"
          />
        </label>
        <br />
        <label>
          Price(in inr)
          <input
            type="number"
            required
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
        </label>
        <br />
        <label>
          Your Name
          <input
            type="text"
            required
            name="sellerName"
            value={formData.sellerName}
            onChange={handleInputChange}
            placeholder="Enter Your name"
          />
        </label>
        
        {/* Submit button */}
        <button>Submit</button>
        <button onClick={backHandler}>Back</button>
      </Form>
    </div>
  );
};

export default StepTwo;
