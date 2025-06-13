import React from "react";
import ProCard from "./ProCard";
import "./Product.css";
import shirt1 from "../Images/shirts/shirt 1.png";
import shirt2 from "../Images/shirts/shirt 2.png";
import shirt3 from "../Images/shirts/shirt 3.png";
import shirt4 from "../Images/shirts/shirt 4.png";
const Product = () => {
  let products = [
    {
      id: 1,
      image: shirt4,
      title: "Black Basic",
      description: "Plain, sleek, soft, stretchable",
      price: "$6.50",
    },
    {
      id: 2,
      image: shirt2,
      title: "Red Classic",
      description: "Soft, bold, breathable, casual",
      price: " $5.50",
    },
    {
      id: 3,
      image: shirt3,
      title: "Sky Polo",
      description: "Smart, cool, comfy, stylish",
      price: "$8.00",
    },
    {
      id: 4,
      image: shirt1,
      title: "Orange Vibe",
      description: "Bright, fresh, comfy, trendy",
      price: "$6.00",
    },
     {
      id: 5,
      image: shirt4,
      title: "Black Basic",
      description: "Plain, sleek, soft, stretchable",
      price: "$6.50",
    },
    {
      id: 6,
      image: shirt2,
      title: "Red Classic",
      description: "Soft, bold, breathable, casual",
      price: " $5.50",
    },
    {
      id: 7,
      image: shirt3,
      title: "Sky Polo",
      description: "Smart, cool, comfy, stylish",
      price: "$8.00",
    },
    {
      id: 8,
      image: shirt1,
      title: "Orange Vibe",
      description: "Bright, fresh, comfy, trendy",
      price: "$6.00",
    },
  ]
  return (
    
      <div className="productItems">
      {
        products.map((item)=>
        <ProCard
            key={item.index}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
            />
        )
      }
      </div>
   
  );
};

export default Product;
