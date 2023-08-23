import classes from "../main.module.css";

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
      <div className={classes.sellPageWrapper} style={{backgroundColor:"white"}}>
        <div>
          <div>POST YOUR AD</div>
        </div>
        <div>
          <ul>
            {categories.map((category, index) => (
              <label>
              <li
                key={index}
                className={selectedCategory === category ? "selected" : ""}
                onClick={() => onSelectCategory(category)}
              >
                {category}
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
