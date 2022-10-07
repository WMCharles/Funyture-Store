import React from 'react'
import "./Item.css"
import { useParams, useNavigate } from 'react-router-dom'

export default function Item({itemData, addToCart, deleteItem}) {
    const {title} = useParams()
    const navigate = useNavigate()
    function handleAddToCart(item){
        addToCart(item)
    }
    function handleDelete(product){
        fetch(`https://blowg.herokuapp.com/products/${product.id}`, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then(() => deleteItem(product))
    }
    return (
        <div className='ProductDetail'>
            <h1 className='pagetitle'>Product Details</h1>
            {itemData.filter((item) => item.title === title).map((product, index) =>
                <div className='Item' key={index}>
                    <div className='productImage'>
                        <img src={product.image} alt="" />
                    </div>
                    <div className='Description'>
                        <h2>{product.title}</h2>
                        <a href={`edit/${product.id}`}><h3>Edit Details</h3></a>
                        <h3 onClick={() => {handleDelete(product); navigate(`/products`)}}>Delete Item</h3>
                        <h2>$ {product.price}</h2>
                        <p>{product.description}</p>
                        <button onClick={() => {handleAddToCart(product); navigate(`/cart`)}}>Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
    )
}
