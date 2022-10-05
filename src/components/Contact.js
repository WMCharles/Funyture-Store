import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <div className='contact-us'>
      <div className='contact-message'>
        <div className='message'>
          <h1>Contact Us</h1>
          <p>Need to get in touch with us? Either fill in the inquiry form or find the department email you'd like to contact below.</p>
        </div>
      </div>
      <div className='contact-form'>
        <form>
          <div className='input-control'>
            <label>Name</label>
            <input type="text" required/>
          </div>
          <div className='input-control'>
            <label>Email</label>
            <input type="email" required/>
          </div>
          <div className='input-control'>
            <label>Message</label>
            <textarea cols="" rows="5"></textarea>
          </div>
          <div className='input-control'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
