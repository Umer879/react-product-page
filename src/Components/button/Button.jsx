import React from 'react'
import ProductPage from '../ProductPage'
import { Link } from 'react-router-dom'
const Button = () => {
  return (
   <Link to= "/products"><button className='banner-btn'>shop now</button></Link>
  )
}

export default Button
