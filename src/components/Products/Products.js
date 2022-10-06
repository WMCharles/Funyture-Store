import React from 'react'
import "./Products.css"
import Product from './Product'
import { useNavigate } from "react-router-dom"

export default function Products({products}) {
  const navigate = useNavigate()

  return (
    <div className='products'>
        <div className='headers'>
          <h1>FUNITURES</h1>
          <h3 onClick={() => {navigate('/products/addproduct')}}>ADD FUNITURES</h3>
        </div>
        <div className='products-wrapper'>
          {products.map((product, index) =>
              <Product product={product} key={index}/>
          )} 
        </div>
    </div>
  )
}
