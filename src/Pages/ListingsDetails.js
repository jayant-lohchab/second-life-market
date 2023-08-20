import React from "react";
import { useLoaderData } from "react-router-dom";
import ListItemDetail from "../components/ListItemDetail";

const ListingsDetailsPage = () => {
  const data = useLoaderData();
  return (
    <>
      <ListItemDetail data={data} />
    </>
  );
};

export default ListingsDetailsPage;

export const loader = async ({ request, params }) => {
  const id = params.id;
  const response = await fetch(
    "https://second-market-ae292-default-rtdb.firebaseio.com/public/item_store/"+id+".json"
  );

  if (!response.ok) {
    throw new Error({ message: "error loading details of this item" });
  } else {
    return response;
  }
};
