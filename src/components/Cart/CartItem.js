import React from 'react'

export default function CartItem({item, removeItem, handleChange}) {
    function removeItemFromCart(){
        removeItem(item)
    }
    return (
        <div className='item'>
            <div className='image'>
                <img src={item.image} alt="" />
            </div>
            <div className='description'>
                <div>
                <h3>{item.title}</h3>
                <br/>
                <h3 className='price'>$ {item.price}</h3>
                </div>
            </div>
            <div className='quantity'>
                <button onClick={() => handleChange(item, 1)}>+</button> {item.quantity} <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div className='total-amount'>
                <h2>$ {item.price * item.quantity}</h2>
                <br/>
                <p onClick={() => removeItemFromCart(item)}>Remove</p>
            </div>
        </div>
    )
}
