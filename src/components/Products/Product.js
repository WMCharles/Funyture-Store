import React from 'react'

export default function Product({product}) {
  return (
    <div className='product-container'>
       <div className='product'>
          <div className='image'>
            <img src={product.image} alt=''/>
          </div>             
          <div className='details'>
              <h2>{product.title}</h2>
              <h2>$ {product.price}</h2>
          </div>
        </div>
    </div>
  )
}
