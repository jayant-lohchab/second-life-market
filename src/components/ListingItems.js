import classes from "./ListingItems.module.css";
import { Link } from "react-router-dom";
import { addingItems } from "../store/CartSlice";
import { useDispatch } from "react-redux";

function ListingItems({ data }) {

  const dispatch = useDispatch();

  const addingToCartHandler = (item)=>{
    dispatch(addingItems(item));
  }

  const storeItems = [];
  for (const key in data) {
    if (data[key] != null) {
      storeItems.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
        image: data[key].image,
        location: data[key].location,
        sellerName: data[key].sellerName,
      });
    }
  }


  return (
    <div className={classes.fullPage}>
      <h1>All Items</h1>
      <ul className={classes.itemsList} >
        {storeItems.map((item) => (
          <li key={item.id} className={classes.listingCard}>
            <Link to={`/listings/${item.id}`}>
            <div className={classes.listingImage}>
        <img src={item.image} alt="store" />
      </div>

      <div className={classes.listingDescription}>
        <h1>{item.name}</h1>
        <h2>{item.description}</h2>
      </div>

            </Link>
      <button onClick={()=>addingToCartHandler(item)} className={classes.listingCartButton}>
        Add to Cart
        <h3>₹ {item.price}</h3>
      </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListingItems;
