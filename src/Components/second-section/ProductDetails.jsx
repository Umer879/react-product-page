import React, { useState } from 'react';
import { useParams } from 'react-router-dom';  // 🧠 Yeh id lene ke liye hai URL se
import './ProductDetails.css';

import shirt1 from "../Images/shirts/shirt 1.png";
import shirt2 from "../Images/shirts/shirt 2.png";
import shirt3 from "../Images/shirts/shirt 3.png";
import shirt4 from "../Images/shirts/shirt 4.png";


const Products = [
  {
    id: 1,
    img: shirt4,
    title: "Black Basic",
    price: "$6.50",
    des: "Plain, sleek, soft, stretchable",
  },
  {
    id: 2,
    img: shirt2,
    title: "Red Classic",
    price: "$5.50",
    des: "Soft, bold, breathable, casual",
  },
  {
    id: 3,
    img: shirt3,
    title: "Sky Polo",
    price: "$8.00",
    des: "Smart, cool, comfy, stylish",
  },
  {
    id: 4,
    img: shirt1,
    title: "Orange Vibe",
    price: "$6.00",
    des: "Bright, fresh, comfy, trendy",
  },
    {
    id: 5,
    img: shirt4,
    title: "Black Basic",
    price: "$6.50",
    des: "Plain, sleek, soft, stretchable",
  },
  {
    id: 6,
    img: shirt2,
    title: "Red Classic",
    price: "$5.50",
    des: "Soft, bold, breathable, casual",
  },
  {
    id: 7,
    img: shirt3,
    title: "Sky Polo",
    price: "$8.00",
    des: "Smart, cool, comfy, stylish",
  },
  {
    id: 8,
    img: shirt1,
    title: "Orange Vibe",
    price: "$6.00",
    des: "Bright, fresh, comfy, trendy",
  },
];

const ProductDetail = () => {
  const { id } = useParams(); // 🧠 URL se `id` uthata hai e.g. `/product/2` → id = 2
  const product = Products.find(p => p.id === parseInt(id)); // 🧠 Matching product nikalta hai

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  if (!product) return <h2>Product not found</h2>; // 🛑 Agar id galat ho to

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.img} alt={product.title} />
      </div>

      <div className="product-info">
        <p className="breadcrumb">Shirt <span className="highlight">{product.title}</span></p>
        <h1>{product.title}</h1>
        <p className="category">Men's Wear</p>
        <p className="rating">⭐️⭐️⭐️⭐️⭐️ <span>(105 reviews)</span></p>

        <div className="quantity-control">
          Quantity:
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <h2>{product.price}</h2>

        <p className="description">{product.des}</p>

        <div className="sizes">
          <p>Select Size</p>
          {[5, 6, 7, 8, 10].map((size) => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="action-buttons">
          <button className="buy-btn">Buy Now</button>
          <button className="fav-btn">Add to Favorite</button>
        </div>

        <p className="delivery">Delivery <span>(5/7 days)</span></p>
      </div>
    </div>
  );
};
export default ProductDetail;
