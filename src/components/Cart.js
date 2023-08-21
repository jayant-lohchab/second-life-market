import React from 'react';
import classes from './Cart.module.css';
import { useDispatch } from 'react-redux';
import { deletingItems } from '../store/CartSlice';

const Cart = ({ cartItems, total }) => {
  const dispatch = useDispatch();
  const removeCartItemHandler = (id) => {
    dispatch(deletingItems(id));
  };

  return (
    <div className={classes.cartContainer}>
      <h2 className={classes.title}>Your Cart</h2>
      <div className={classes.cartItems}>
        {cartItems.map((item, index) => (
          <div key={index} className={classes.cartItem}>
            <div className={classes.itemImage}>
              <img src={item.image} alt={item.name} />
            </div>
            <div className={classes.itemDetails}>
              <p className={classes.itemName}>{item.name}</p>
              <p className={classes.itemPrice}>${item.price.toFixed(2)}</p>
              <p className={classes.itemLocation}>Location: {item.location}</p>
              <p className={classes.itemSellerName}>Seller: {item.sellerName}</p>
            </div>
            <button
              onClick={() => removeCartItemHandler(item.id)}
              className={classes.removeButton}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className={classes.cartSummary}>
        <p className={classes.total}>Total: ${total.toFixed(2)}</p>
        <button className={classes.continueButton}>Continue to Order</button>
      </div>
    </div>
  );
};

export default Cart;
