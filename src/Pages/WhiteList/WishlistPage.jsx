import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearwhite, removeFromWhite, selectWhite } from '../../Redux/CountSlice';
import Layout from '../../component/Layout/Layout';

const WishlistPage = () => {
  const whiteItem = useSelector(selectWhite);
  const dispatch = useDispatch();

  const handleRemoveWhiteList = (product) => {
    dispatch(removeFromWhite(product));
  };

  const handleClearWhite = () => {
    dispatch(clearwhite());
  };

  return (
   <Layout>
     <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>

      {whiteItem.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty!</p>
      ) : (
        <>
          <ul>
            {whiteItem.map((item) => (
              <li key={item._id} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img
                    src={
                      item.image
                        ? `http://localhost:8080/${item.image.replace('\\', '/')}`
                        : 'https://via.placeholder.com/150' // Fallback image URL
                    }
                    alt={item.description || 'No description available'}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{item.description || 'No description'}</h3>
                    <p>Price: ${item.price || 'N/A'}</p>
                    <p>Quantity: {item.quantity || 0}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveWhiteList(item)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handleClearWhite}
              className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Clear Wishlist
            </button>
          </div>
        </>
      )}
    </div>
    
   </Layout>
  );
};

export default WishlistPage;
