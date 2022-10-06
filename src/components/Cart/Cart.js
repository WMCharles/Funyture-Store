import React from 'react'
import "./Cart.css"
import CartItem from './CartItem'

export default function Cart({cart}) {
  return (
    <div className='cart'>
      <h1>Shopping Cart</h1>
      {cart.map((item) => 
        <CartItem item={item}/>
      )}
      <hr/>
      <div className='net'>
        <div></div>
        <div></div>
        <div></div>
        <div className='checkout'>
          <h1>$ Total</h1>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}
