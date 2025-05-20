import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Assuming you have action creators for increasing and decreasing item quantity
import './ShoppingCart.css';

const ShoppingCart = () => {
  
  const dispatch = useDispatch(); // Use useDispatch to get the dispatch function
  const cartItems = useSelector(state => state.cart.cartItems); // Use useSelector to get the cart items from the Redux store
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate the total amount

  const handleRemoveItem = itemId => {
    dispatch(removeItemFromCart(itemId));
  };
// Function to handle clearing the cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };
// Function to handle increasing item quantity
  const handleIncreaseQuantity = itemId => {
    dispatch(increaseItemQuantity(itemId));
  };
// Function to handle decreasing item quantity
  const handleDecreaseQuantity = itemId => {
    dispatch(decreaseItemQuantity(itemId));
  };
// dispatch is used to send actions to the Redux store, which will update the state accordingly
// useSelector is used to access the current state of the cart from the Redux store
  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
      {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <span>{item.name} - ${item.price}</span>
              <div className="quantity-controls">
                <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span> {item.quantity}</span>
                <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
      </ul>
      <button onClick={handleClearCart} className="clear-cart-btn">Clear Cart</button>
    </div>
    <div>{totalAmount ? <div>'The total amount is {totalAmount}</div> : ''}</div>
    </>
  );
};

export default ShoppingCart;
