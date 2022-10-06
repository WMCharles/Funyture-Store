import React from 'react'
import "./Cart.css"

export default function Cart({cart}) {
  return (
    <div className='cart'>
      <h1>Shopping Cart</h1>
      {cart.map((item) => 
        <div className='item'>
          <div className='image'>
            <img src={item.image} alt="" />
          </div>
          <div className='description'>
            <div>
              <h3>{item.title}</h3>
              <br/>
              <h3 className='price'>$ {item.price}</h3>
            </div>
          </div>
          <div className='quantity'>
            <button>+</button> 1 <button>-</button>
          </div>
          <div className='total-amount'>
            <h2>$ {item.price}</h2>
            <br/>
            <a href="#">Remove</a>
          </div>
        </div>
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
