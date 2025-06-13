import React from "react";
import "./FooterProduct.css";
import img1 from "../Images/latest products/img 1.png";
import img2 from "../Images/latest products/img 2.png";
import img3 from "../Images/latest products/img 3.png";
import img4 from "../Images/latest products/img 4.png";
import img5 from "../Images/latest products/img 5.png";
import img6 from "../Images/latest products/img 6.png";
const FooterProduct = () => {
  return (
    <div className="footer-products">
      <div className="img1 img">
        <img src={img1} alt="" />
      </div>
      <div className="img2 img">
        <img src={img2} alt="" />
      </div>
      <div className="img3 img">
        <img src={img3} alt="" />
      </div>
      <div className="img4 img">
        <img src={img4} alt="" />
      </div>
      <div className="img5 img">
        <img src={img5} alt="" />
      </div>
      <div className="img6 img">
        <img src={img6} alt="" />
      </div>
    </div>
  );
};

export default FooterProduct;
