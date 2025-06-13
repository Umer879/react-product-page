import React from "react";
import "./FooterDetails.css";
import FooterProduct from "./FooterProduct";
const FooterDetails = () => {
  return (
    <div className="footer-details">
      <div className="footer-about footerItem">
        <h1>About Us</h1>
        <div className="box"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-whatsapp"></i>
        </div>
      </div>
      <div className="footer-touch footerItem">
        <h1>Get in Touch</h1>
        <div className="box"></div>
        <div className="account">
          <div className="information user">
            <i class="fa-solid fa-user"></i>
            <p> John Doe</p>
          </div>
          <div className="information location">
            <i class="fa-solid fa-location-dot"></i>
            <p> G-15 Islamabad, Pakistan</p>
          </div>
          <div className="information email">
            <i class="fa-solid fa-envelope"></i>
            <p>umargull5045@gmail.com</p>
          </div>
          <div className="information website">
            <i class="fa-solid fa-globe"></i>
            <p>www.umergull.com</p>
          </div>
        </div>
      </div>
      <div className="footer-links footerItem">
        <h1>Useful links</h1>
        <div className="box"></div>
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">lorem ipsum</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
        </ul>
      </div>
      <div className="footerProduct footerItem">
        <h1>Latest Products</h1>
        <div className="box"></div>
        <FooterProduct />
      </div>
    </div>
  );
};

export default FooterDetails;
