import React, {useEffect, useState} from 'react'
import "./AddProduct.css"
import { useParams } from 'react-router-dom'

export default function AddProduct({addToProducts}) {

     // Params Constant
     const params = useParams()
     const [id, setId] = useState(params.id)

    // Handling change in form
    const [formData, setFormData] = useState({
        title:"",
        description:"",
        price: 0,
        image:""
    })

    function handleInputChange (event){
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
      });
    }

    useEffect(()=>{
        if(id){
            fetch(`https://blowg.herokuapp.com/products/${id}`)
            .then(resp=>resp.json())
            .then((item)=>{
                setFormData(item);
            })
        }},
       [id]
    );
 
    function handleFormSubmit(e){
        e.preventDefault()
        fetch(`https://blowg.herokuapp.com/products/${id ? '/'+id : ''}`, {
            method: id ? "PUT" : "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((item) => console.log(item))
    }

    // function handleSubmit(e){
    //     e.preventDefault()
    //     fetch(`https://wild-ruby-snail-shoe.cyclic.app/products/${id ? '/'+id : ''}`, {
    //         method: id ? "PUT" : "POST",
    //         headers: {
    //             "content-type":"application/json"
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //     .then((item) => console.log(item))
    // }

    return (
        <div className='Product'>
            <h1>Add Product</h1>
            <div className='AddProduct'>
                <form onSubmit={handleFormSubmit}>
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
