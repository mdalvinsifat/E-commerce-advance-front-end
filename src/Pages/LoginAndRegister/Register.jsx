import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeRegisterDialog } from '../../Redux/LoginRegisterDialog';
import { useAddnewAuthRegisterMutation } from '../../Redux/UserSlice';

const Register = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.dialog.registerDialogOpen);
  const [addnewAuthRegister, { isLoading, isSuccess, isError }] =
    useAddnewAuthRegisterMutation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addnewAuthRegister(formData).unwrap();
      alert('Registration successful!');
      dispatch(closeRegisterDialog());
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
          <button
            type="submit"
            className={`bg-blue-600 text-white py-2 px-4 rounded w-full ${
              isLoading ? 'opacity-50' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
        {isSuccess && (
          <p className="text-green-500 mt-2">Registration successful!</p>
        )}
        {isError && (
          <p className="text-red-500 mt-2">Registration failed. Try again.</p>
        )}
        <button
          className="mt-4 text-blue-600 hover:underline"
          onClick={() => dispatch(closeRegisterDialog())}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Register;
