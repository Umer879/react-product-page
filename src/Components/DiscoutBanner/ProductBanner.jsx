import React from "react";
import './ProductBanner.css'
import productImg from '../Images/discount/discount.png'
const ProductBanner = () => {
  return (
    <div className="bannerImg">
      <img src={productImg} alt="" />
    </div>
  );
};

export default ProductBanner;
