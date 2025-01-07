import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, selectCart } from "../../Redux/CardSlice";
import { Link } from 'react-router-dom';
import { clearwhite, removeFromWhite, selectWhite } from '../../Redux/CountSlice';

const WishlistPage = () => {
const whiteItem = useSelector(selectWhite)
const dispatch  = useDispatch()

const handleRemoveWhiteList = (product) =>{
dispatch(removeFromWhite(product))
}

const handleClearWhite = () =>{
  dispatch(clearwhite())
}
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
   
        <>
          <ul>
            {whiteItem.map((item) => (
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
                  onClick={() => handleRemoveWhiteList(item)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handleClearWhite}
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
            >
              Clear Cart
            </button>
          
          </div>
        </>
      
    </div>
  );
};

export default WishlistPage;
