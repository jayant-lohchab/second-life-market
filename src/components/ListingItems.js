import classes from "./ListingItems.module.css"

function ListingItems({data}) {
  const storeItems = [];
  for (const key in data) {
    if(data[key] != null){

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
      <div className={classes.temp}>
        <img src={item.image} alt="store" />
        <h1>{item.name}</h1>
        <h2>{item.description}</h2>
        <h3>{item.price}</h3>
      </div>
    ));
  return (
    <div>{shownItems}</div>
  )
}

export default ListingItems