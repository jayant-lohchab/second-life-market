import { Form } from "react-router-dom";

const StepTwo = ({ prevStep, setFormData, formData, onChange, onSubmit }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };

  const handleImageUpload = (event) => {
    const { files } = event.target;
    onChange({ images: files });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    onSubmit(); // Call the parent component's onSubmit function
    setFormData({
      category: "",
      brand: "",
      adtitle: "",
      desc: "",
      price: "",
      name: "",
      mobileno: "",
      images: [],
    });
  };

  function backHandler() {
    prevStep();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Brand:
          <input
            type="text"
            required
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}
            placeholder="Brand"
          />
        </label>
        <br />
        <label>
          Ad Title
          <input
            type="text"
            required
            name="adtitle"
            value={formData.adtitle}
            onChange={handleInputChange}
            placeholder="Ad Title"
          />
        </label>
        <br />
        <label>
          Description
          <textarea
            name="desc"
            required
            value={formData.desc}
            onChange={handleInputChange}
            placeholder="Description"
          />
        </label>
        <br />
        <label>
          Price(in inr)
          <input
            type="text"
            required
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
        </label>
        <br />
        <label>
          Full Name
          <input
            type="text"
            required
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
          />
        </label>
        <br />
        <label>
          Mobile Number
          <input
            type="number"
            required
            maxLength={10}
            name="mobileno"
            value={formData.mobileno}
            onChange={handleInputChange}
            placeholder="Mobile Number"
          />
        </label>
        <br />
        <label>
          Email Address
          <input
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email-Id"
          />
        </label>
        <br />
        <label>
          Upload Image
          <input type="file" multiple onChange={handleImageUpload} />
          {formData.images && formData.images.length > 0 && (
            <div>
              <h3>Preview Images:</h3>
              <div>
                {Array.from(formData.images).map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index}`}
                    style={{ maxWidth: "100px", margin: "5px" }}
                  />
                ))}
              </div>
            </div>
          )}
        </label>
        <br />
        {/* Submit button */}
        <button>Submit</button>
        <button onClick={backHandler}>Back</button>
      </form>
    </div>
  );
};

export default StepTwo;
