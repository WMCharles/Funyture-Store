import React from 'react'

export default function Product({product}) {
  return (
    <div className='product-container'>
       <div className='product'>
          <div className='image'>
            <img src={product.image} alt=''/>
          </div>             
          <div className='title'>
              <h3>{product.title}</h3>
          </div>
          <div className='price'>
              <h3>$ {product.price}</h3>
          </div>
        </div>
    </div>
  )
}
