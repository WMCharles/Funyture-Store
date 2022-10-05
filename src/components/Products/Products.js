import React from 'react'
import "./Products.css"
import Product from './Product'

export default function Products({products}) {
  return (
    <div className='products'>
        <h2>FUNitures</h2>
        <div className='products-wrapper'>
            {products.map((product, index) =>
                <Product product={product}/>
            )} 
            </div>
    </div>
  )
}
