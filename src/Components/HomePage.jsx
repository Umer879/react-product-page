import React from 'react'
import Banner from '../Components/first-section/Banner.jsx'
import Product from '../Components/second-section/Product.jsx'
import Banner2 from '../Components/third-section/banner2.jsx'
import Footer from '../Components/fourth-section/Footer.jsx'
const Component = () => {
  return (
     <div className="container-fluid px-0">
          <Banner />
          <div className="arrival">
            <h1 className="h1">NEW ARRIVALS</h1>
            <p className="P">Trending from mens and womens style collection</p>
          </div>
          <Product />
          <Banner2 />
          <div className="arrival">
            <h1 className="h1">FEATURED</h1>
            <p className="P">Trending from mens and womens style collection</p>
          </div>
          <Product />
          <Footer />
        </div>
  )
}

export default Component
