import React from 'react'
import './Submitt.css'
const Submitt = () => {
  return (
   <div className="submit-form">
    <h1>Get in Touch</h1>
    <p>You can reach us anytime</p>
    <form action="#">
        <div className="name">
        <input type="text" placeholder='First name' />
        <input type="text" placeholder='Last name' />
        </div>
        <div className="email">
            <input type="email" placeholder='Your Email'/>
            <input type="number" placeholder='Phone number' />
        </div>
        <div className="text-area">
            <textarea name="" id="" placeholder='How can we help'></textarea>
        </div>
        <button type="submit">Submit</button>
    </form>
    <p className='privacy-policy'>By contacting us, you agree to our <span>terms of service</span> on <span>Privacy Policy</span></p>
   </div>
  )
}

export default Submitt
