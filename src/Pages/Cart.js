import React from 'react'
import Cart from '../components/Cart';
import { useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux';


function CartPage() {
  const navigate = useNavigate();
  const cartItems = useSelector(state=>state.cartStatus.items);
  let totalPrice = 0;
  for(const item of cartItems){
    totalPrice+=item.price;
  }
  const continueOrder = () => {
    navigate("/listings");
  };

  

  return (
    <>
    { cartItems.length > 0 && 
      <Cart cartItems={cartItems} total={totalPrice}/>
      }

    {cartItems.length < 1 && 
     <div style={{ height:'100vh' , display:'flex' , flexDirection:'column' ,alignItems:'center' }}>
      <p style={{textAlign: 'center', marginTop:'100px' , marginBottom:'30px' , color:'grey' }}>Your Cart is Empty </p>
      <button
      style={{
        display: 'inline-block',
        padding: '14px 20px',
        backgroundImage: 'linear-gradient(to bottom, #6598c0, #355f82)',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        fontSize: '16px',
        cursor: 'pointer',
        width: '30%',
        marginTop: '20px',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
      }}
      onClick={continueOrder}

    >    
     Continue Shopping
     </button>
     </div>

    }  
    </>
  )
}

export default CartPage;