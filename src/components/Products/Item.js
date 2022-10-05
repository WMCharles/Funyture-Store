import React from 'react'
import "./Item.css"
import { useParams } from 'react-router-dom'

export default function Item({itemData}) {
    const {title} = useParams()
    return (
        <div className='Product'>
            <h1>Product Details</h1>
            {itemData.filter((item) => item.title === title).map((product) =>
                <div className='Item'>
                    <div className='productImage'>
                        <img src={product.image} alt="" />
                    </div>
                    <div className='Description'>
                        <h2>{product.title}</h2>
                        <h3>$ {product.price}</h3>
                        <p>{product.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
    )
}
