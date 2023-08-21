import React from 'react'
import Cart from '../components/Cart';
import { useSelector } from 'react-redux';

function CartPage() {

  const cartItems = useSelector(state=>state.cartStatus.items);
  let totalPrice = 0;
  for(const item of cartItems){
    totalPrice+=item.price;
  }

  return (
    <>
    <Cart cartItems={cartItems} total={totalPrice}/>
    </>
  )
}

export default CartPage;