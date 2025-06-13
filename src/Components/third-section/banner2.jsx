import React from "react";
import "./banner2.css";
import img2 from "../Images/banner/girl 2.png";
import Button from "../button/Button";

const Banner2 = () => {
  return (
    <div className="banner2">
      <div className="img">
        <img src={img2} alt="" />
      </div>
      <div className="banner2-details">
        <div className="details">
          <p>New Inspiration 2023</p>
          <h1>NEW COLLECTION!</h1>
          <p>Trending from mens and womens style collection</p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
