import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, selectCart } from "../../Redux/CardSlice";
import { Link } from 'react-router-dom';
import Layout from '../../component/Layout/Layout';

const Cart = () => {
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
   <Layout>
     <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-600">Start shopping!</Link></p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img src={`http://localhost:8080/${item.image.replace('\\', '/')}`} alt={item.description} className="w-20 h-20 object-cover mr-4" />
                  <div>
                    <h3 className="font-semibold">{item.description}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handleClearCart}
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
            >
              Clear Cart
            </button>
            <div>
              <h3 className="font-bold">Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Proceed to Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
   </Layout>
  );
};

export default Cart;
