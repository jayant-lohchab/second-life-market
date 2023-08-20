import React from 'react'
import classes from "./ListItemDetail.module.css"
function ListItemDetail({data}) {
  return (
    <article className={classes.product}>
      <div className={classes.productImage}>
        <img src={data.image} alt="Product" />
      </div>
      <div className={classes.productDetails}>
        <h2 className={classes.productName}>{data.name}</h2>
        <p className={classes.productCategory}>{data.category}</p>
        <p className={classes.productPrice}>₹ {data.price}</p>
        <p className={classes.productDescription}>{data.description}</p>
        <div className={classes.productSellerInfo}>
          <p className={classes.productLocation}>{data.location}</p>
          <p className={classes.productSeller}>Sold by {data.sellerName}</p>
          <p className={classes.productContact}>{data.contactEmail}</p>
        </div>
      </div>
    </article>
  )
}

export default ListItemDetail