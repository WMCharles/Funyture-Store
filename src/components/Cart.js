import React from 'react'
import "./Cart.css"

export default function Cart() {
  return (
    <div className='cart'>
      <h1>Shopping Cart</h1>
      <div className='item'>
        <div className='image'>
          <img src="https://static6.depositphotos.com/1123553/614/i/600/depositphotos_6142155-stock-photo-yellow-sofa-interior-design.jpg" alt="" />
        </div>
        <div className='description'>
          <div>
            <h3>Sofa</h3>
            <br/>
            <h3 className='price'>$ 600</h3>
          </div>
        </div>
        <div className='quantity'>
          <button>+</button> 2 <button>-</button>
        </div>
        <div className='total-amount'>
          <h2>$ 600</h2>
          <br/>
          <a href="#">Remove</a>
        </div>
      </div>
      <hr/>
      
      <div className='net'>
        <div></div>
        <div></div>
        <div></div>
        <div className='checkout'>
          <h1>$ 600</h1>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}
