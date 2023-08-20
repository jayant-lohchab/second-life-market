import classes from "./ListingItems.module.css";

function ListingItems({ data }) {
  const storeItems = [];
  for (const key in data) {
    if (data[key] != null) {
      storeItems.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
        image: data[key].image,
      });
    }
  }
  
  const shownItems = storeItems.map((item) => (
    <div className={classes.listingCard} key={item.id}>
      <div className={classes.listingImage}>
        <img src={item.image} alt="store" />
      </div>

      <div className={classes.listingDescription}>
        <h1>{item.name}</h1>
        <h2>{item.description}</h2>
      </div>

      <button className={classes.listingCartButton}>
        Add to Cart
        <h3>₹ {item.price}</h3>
      </button>
    </div>
  ));

  return <div className={classes.listingPage}>{shownItems}</div>;
}

export default ListingItems;