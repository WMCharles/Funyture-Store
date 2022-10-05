import React from 'react'
import "./AddProduct.css"

export default function AddProduct() {
  return (
    <div className='product'>
        <h1>Add Product</h1>
        <div className='addProduct'>
            <form>
                <div className='input-control'>
                    <label>Name</label>
                    <input type="text" required/>
                </div>
                <div className='input-control'>
                    <label>Price</label>
                    <input type="number" required/>
                </div>
                <div className='input-control'>
                    <label>Description</label>
                    <textarea cols="" rows="5"></textarea>
                </div>
                <div className='input-control'>
                    <button type='submit'>Add Product</button>
                </div>
            </form>
        </div>
    </div>
  )
}
