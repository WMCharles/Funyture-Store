import React from 'react'
import "./Item.css"

export default function Item() {
  return (
    <div className='product'>
        <h1>Product Details</h1>
        <div className='item'>
            <div className='image'>
                <img src="https://static6.depositphotos.com/1123553/614/i/600/depositphotos_6142155-stock-photo-yellow-sofa-interior-design.jpg" alt="" />
            </div>
            <div className='description'>
                <h2>Product Title</h2>
                <h3>$ 350</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
