import React from 'react';
import '../CSS/ProductList.css'; // Assuming you have a CSS file for styling
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
