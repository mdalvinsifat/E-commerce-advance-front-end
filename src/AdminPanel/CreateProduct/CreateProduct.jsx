// src/components/CreateProduct.js
import React, { useState } from 'react';
import { useAddNewProductMutation } from '../../Redux/UserSlice';

const CreateProduct = () => {
  const [addNewProduct, { isLoading, isSuccess, isError, error }] = useAddNewProductMutation();
  const [formData, setFormData] = useState({
    image: null,
    imageOne: null,
    imageTwo: null,
    imageThree: null,
    imageFour: null,
    heading: '',
    subHeading: '',
    oldPrice: '',
    price: '',
    size: '',
    color: '',
    gsm: '',
    fabric: '',
    sku: '',
    categories: '',
    tag: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value, // Handle files and text inputs dynamically
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataToSubmit.append(key, formData[key]);
      }
    });

    try {
      await addNewProduct(formDataToSubmit);
    } catch (error) {
      console.error(error);
    }
  };

  const renderImagePreview = (imageFile) => {
    if (!imageFile) return null;
    const objectURL = URL.createObjectURL(imageFile);
    return <img src={objectURL} alt="Selected" className="w-32 h-32 object-cover rounded-md mt-2" />;
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Main Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            required
          />
          {renderImagePreview(formData.image)}
        </div>
        {['imageOne', 'imageTwo', 'imageThree', 'imageFour'].map((imageField, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-700">
              Additional Image {index + 1}
            </label>
            <input
              type="file"
              name={imageField}
              accept="image/*"
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            />
            {renderImagePreview(formData[imageField])}
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Heading</label>
          <input
            type="text"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Sub Heading</label>
          <input
            type="text"
            name="subHeading"
            value={formData.subHeading}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Old Price</label>
          <input
            type="number"
            name="oldPrice"
            value={formData.oldPrice}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Size</label>
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Color</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">GSM</label>
          <input
            type="text"
            name="gsm"
            value={formData.gsm}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fabric</label>
          <input
            type="text"
            name="fabric"
            value={formData.fabric}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">SKU</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Categories</label>
          <input
            type="text"
            name="categories"
            value={formData.categories}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tag</label>
          <input
            type="text"
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg"
            disabled={isLoading}
          >
            {isLoading ? 'Adding Product...' : 'Add Product'}
          </button>
        </div>
      </form>
      {isSuccess && <div className="mt-6 text-center text-green-600">Product added successfully!</div>}
      {isError && (
        <div className="mt-6 text-center text-red-600">
          Error: {error?.message || 'Something went wrong'}
        </div>
      )}
    </div>
  );
};

export default CreateProduct;
