import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Product({product}) {
  const navigate = useNavigate()
  return (
    <div className='product-container' onClick={() => {navigate(`/products/${product.title}`);}}>
       <div className='product'>
          <div className='image'>
            <img src={product.image} alt=''/>
          </div>             
          <div className='details'>
              <h2>{product.name}</h2>
              <h2>$ {product.price}</h2>
          </div>
        </div>
    </div>
  )
}
