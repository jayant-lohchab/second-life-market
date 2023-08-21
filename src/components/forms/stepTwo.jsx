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
        <label>Brand</label>
        <input
          type="text"
          required
          name="brand"
          value={formData.brand}
          onChange={handleInputChange}
          placeholder="Brand"
        />
        <label>Ad Title</label>
        <input
          type="text"
          required
          name="adtitle"
          value={formData.adtitle}
          onChange={handleInputChange}
          placeholder="Ad Title"
        />
        <label>Description</label>
        <textarea
          name="desc"
          required
          value={formData.desc}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <label>Price(in inr)</label>
        <input
          type="text"
          required
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Price"
        />
        <label>Name</label>
        <input
          type="text"
          required
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
        />
        <label>Phone Number</label>
        <input
          type="text"
          required
          name="mobileno"
          value={formData.mobileno}
          onChange={handleInputChange}
          placeholder="Mobile Number"
        />
        <label>Email</label>
        <input
          type="email"
          required
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email-Id"
        />
        <label>Upload Image</label>

        {/* Image upload */}
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

        {/* Submit button */}
        <button>Submit</button>
        <button onClick={backHandler}>Back</button>
      </form>
    </div>
  );
};

export default StepTwo;
