import React from "react";
import "./ProCard.css";
import { Link } from "react-router-dom";
const ProCard = ({ id, image, title, description, price }) => {
  return (
    <div className="card">
      <Link to={`/product-details/${id}`} >
        <div className="cardImg">
          <img src={image} alt="Orange Shirt" />
        </div>
      </Link>
      <div className="card-details">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default ProCard;
