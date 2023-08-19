import ListingItems from "../components/ListingItems";
import { useLoaderData } from "react-router-dom";

const ListingsPage = () => {

  const data = useLoaderData();

  return (
    <main>
      <ListingItems data={data} />
    </main>
  );
};

export default ListingsPage;


export const loader = async ()=>{
  const response = await fetch(
    "https://second-market-ae292-default-rtdb.firebaseio.com/public/item_store.json"
  );
  if (!response.ok) {
    throw new Error({message:'Something went wrong in fetching the data'})
  }
  else{
      return response;
  }
}