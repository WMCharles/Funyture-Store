import React, {useEffect, useState} from 'react'
import "./AddProduct.css"
import { useParams } from 'react-router-dom'

export default function AddProduct({addToProducts}) {
    const [formData, setFormData] = useState({
        title: "",
        price:"",
        description:"",
        image:""

    })
    function handleInputChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // Params Constant
    const params = useParams()
    const [id, setId] = useState(params.id)

    useEffect(()=>{
        if(id){
            fetch(`https://wild-ruby-snail-shoe.cyclic.app/products/${id}`)
            .then(resp=>resp.json())
            .then((item)=>{
                setFormData(item);
            })
        }},
       [id]);

    function handleSubmit(event){
        event.preventDefault()
        fetch(`https://wild-ruby-snail-shoe.cyclic.app/products/${id ? '/'+id : ''}`, {
            method: id ? "PATCH" : "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then((item) => addToProducts(item))        
    }

    return (
        <div className='Product'>
            <h1>Add Product</h1>
            <div className='AddProduct'>
                <form onSubmit={handleSubmit}>
                    <div className='input-control'>
                        <label>Title</label>
                        <input type="text" required name='title' onChange={handleInputChange} value={formData.title}/>
                    </div>
                    <div className='input-control'>
                        <label>Price</label>
                        <input type="number" name='price' required onChange={handleInputChange} value={formData.price}/>
                    </div>
                    <div className='input-control'>
                        <label>Description</label>
                        <textarea cols="" rows="5" name='description' required onChange={handleInputChange} value={formData.description}></textarea>
                    </div>
                    <div className='input-control'>
                        <label>Image URL</label>
                        <input type="text" name='image' required onChange={handleInputChange} value={formData.image}/>
                    </div>
                    <div className='input-control'>
                        <button type='submit'>Add Product</button>
                    </div>
                </form>
            </div>
        </div>
  )
}
