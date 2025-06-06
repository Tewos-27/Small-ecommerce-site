import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './CartSlice';
import './ProductList.css'; // Import CSS file for component-specific styles

const ProductList = () => {
  // This component displays a list of products and allows users to add them to the cart
  // It uses Redux for state management and maintains a local state to track disabled products
  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]); // State to store disabled products
// The disabledProducts state is an array that keeps track of products that have been added to the cart
// The useDispatch hook is used to dispatch actions to the Redux store
  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];
  
  // Function to handle adding a product to the cart
  // This function dispatches the addItemToCart action with the product as an argument
  const handleAddToCart = product => {
    // Check if the product is already disabled
    // If it is, we do not allow adding it to the cart again
    dispatch(addItemToCart(product));
    setDisabledProducts([...disabledProducts, product.id]); // Mark the product as disabled
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map(product => (
          <li key={product.id} className="product-list-item">
            <span>{product.name} - ${product.price}</span>
            <button 
              className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`} 
              onClick={() => handleAddToCart(product)}
              disabled={disabledProducts.includes(product.id)} // Disable button if product is in disabledProducts
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;