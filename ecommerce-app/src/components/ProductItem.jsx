import React from 'react';
import '../CSS/ProductItem.css'; 

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>
      <p className="description">{product.description}</p>
    </div>
  );
};

export default ProductItem;
