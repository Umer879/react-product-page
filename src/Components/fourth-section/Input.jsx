import React from 'react'
import './Input.css'
import Button from '../button/Button'
const Input = () => {
  return (
    <div className="input">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        <p>incididunt ut labore consequat.</p>
        <form action="#">
            <input type="text"  placeholder='Your name'/>
            <input type="email"  placeholder='Your Email'/>
           <Button/>
        </form>
        <div className="line"></div>
        <div className="notice">
            <p>@ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
  )
}

export default Input
