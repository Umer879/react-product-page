import React from 'react'
import bannerImg from "../Images/banner/girl.png"
import "./Banner.css"
import Button from '../button/Button'
const Banner = () => {
  return (
   <div className="banner-cont">
    <div className="img">
        <img src={bannerImg} alt="" />
    </div>
    <div className="banner-details">
        <p>New Inspiration 2023</p>
        <h1>NEW COLLECTION!</h1>
        <p>Trending from mens and womens style collection</p>
        <Button />
    </div>
   </div>
  )
}

export default Banner
