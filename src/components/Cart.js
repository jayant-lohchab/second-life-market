import { useState } from "react";
import classes from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { deletingItems,deleteAllItems } from "../store/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, total }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  console.log(isConfirmed);
  const [addressData, setAddressData] = useState({
    houseNo: "",
    blockName: "",
    postalCode: "",
    landmark: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const continueOrder = () => {
    navigate("/listings");
  };

  const removeCartItemHandler = (id) => {
    dispatch(deletingItems(id));
  };

  const changeShowCartHandler = ()=>{
    setIsConfirmed(!isConfirmed);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const finalOrder = {
      orderedItems:cartItems,
      userAdress:addressData
    }

    const response = await fetch('https://second-market-ae292-default-rtdb.firebaseio.com/public/orders.json',{
      method:'POST',
      body:JSON.stringify(finalOrder)
    })
    if(!response.ok){
      throw new Error("sending order failed");
    }
    else{
      changeShowCartHandler();
      dispatch(deleteAllItems());
      navigate('/home');
    }
  };

  const showCart = <>
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
              <p className={classes.itemSellerName}>
                Seller: {item.sellerName}
              </p>
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
        <button className={classes.continueButton} onClick={continueOrder}>
          Continue to Order
        </button>
        <button className={classes.confirmButton} onClick={changeShowCartHandler}>Confirm Order</button>
      </div>
    </div>
  </>
  const addressForm = <>
  <div className={classes.addressContainer}>
      <form className={classes.addressForm} onSubmit={handleSubmit}>
        <label className={classes.addressLabel}>House No.</label>
        <input
          type="text"
          className={classes.addressInputs}
          value={addressData.houseNo}
          onChange={(e) => setAddressData({ ...addressData, houseNo: e.target.value })}
          required
        />

        <label className={classes.addressLabel}>Block Name</label>
        <input
          type="text"
          className={classes.addressInputs}
          value={addressData.blockName}
          onChange={(e) => setAddressData({ ...addressData, blockName: e.target.value })}
          required
        />

        <label className={classes.addressLabel}>Postal Code</label>
        <input
          type="text"
          className={classes.addressInputs}
          value={addressData.postalCode}
          onChange={(e) => setAddressData({ ...addressData, postalCode: e.target.value })}
          required
        />

        <label className={classes.addressLabel}>Landmark</label>
        <input
          type="text"
          className={classes.addressInputs}
          value={addressData.landmark}
          onChange={(e) => setAddressData({ ...addressData, landmark: e.target.value })}
        />


        <button type="submit" className={classes.submitButton}>
          Submit
        </button>
      </form>
          <button className={classes.backToCartbttn} onClick={changeShowCartHandler}>Back to Cart</button>
    </div>
  </>

  return (
    <>
    {isConfirmed ? addressForm : showCart};
    </>
  );
};

export default Cart;
