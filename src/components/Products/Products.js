import React from 'react'
import "./Products.css"
import Product from './Product'

export default function Products({products}) {
  return (
    <div className='products'>
        <div className='headers'>
          <h1>FUNITURES</h1>
          <h3>ADD FUNITURES</h3>
        </div>
        <div className='products-wrapper'>
          {products.map((product, index) =>
              <Product product={product}/>
          )} 
        </div>
    </div>
  )
}
