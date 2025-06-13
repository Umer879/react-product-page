import React from 'react'
import ProductBanner from './DiscoutBanner/ProductBanner'
import Product from './second-section/Product'
import Banner2 from './third-section/banner2'
import Footer from './fourth-section/Footer'
const ProductPage = () => {
  return (
    <div className="products">
        <ProductBanner />
        <Product />
        <Footer />
    </div>
  )
}

export default ProductPage
