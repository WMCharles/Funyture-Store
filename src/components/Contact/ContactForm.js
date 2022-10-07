import React, { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    function handleInputChange(e){
        setFormData ({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("https://wild-ruby-snail-shoe.cyclic.app/messages", {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((item) => console.log(item))
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className='input-control'>
                <label>Name</label>
                <input type="text" name="name" onChange={handleInputChange} required/>
            </div>
            <div className='input-control'>
                <label>Email</label>
                <input type="email" name='email'  onChange={handleInputChange} required/>
            </div>
            <div className='input-control'>
                <label>Message</label>
                <textarea cols="" rows="5" name='message'  onChange={handleInputChange} required></textarea>
            </div>
            <div className='input-control'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}
