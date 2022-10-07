import React, {useEffect, useState} from 'react'

import "./Cart.css"
import CartItem from './CartItem'

export default function Cart({cart, removeItem, handleChange}) {
  const [price, setPrice] = useState(0)

  function handlePrice(){
    let total = 0
    // eslint-disable-next-line no-lone-blocks
    {cart.map((item) => (total += item.price * item.quantity))}
    setPrice(total)
  }
  
  useEffect(() => {
    handlePrice()
  })
  return (
    <div className='cart'>
      <h1>Shopping Cart</h1>
      {cart.map((item, index) => 
        <CartItem item={item} removeItem={removeItem} key={index} handleChange={handleChange}/>
      )}
      <hr/>
      <div className='net'>
        <div></div>
        <div></div>
        <div></div>
        <div className='checkout'>
          <h1>$ {price}</h1>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}
