import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginDialog, openRegisterDialog } from '../../Redux/LoginRegisterDialog';
import { useAddnewAuthLoginMutation } from '../../Redux/UserSlice';

const Login = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.dialog.loginDialogOpen);
  const [addnewAuthLogin, { isLoading, isError }] = useAddnewAuthLoginMutation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      const response = await addnewAuthLogin(formData).unwrap();
      alert('Login successful!');
      console.log('Login Response:', response);
      dispatch(closeLoginDialog());
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        {/* Login Form */}
        <form onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className={`bg-blue-600 text-white py-2 px-4 rounded w-full ${
              isLoading ? 'opacity-50' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {isError && (
          <p className="text-red-500 mt-2">Login failed. Check your credentials and try again.</p>
        )}
        <button
          className="mt-4 text-blue-600 hover:underline"
          onClick={() => dispatch(closeLoginDialog())}
        >
          Close
        </button>
        <button
          className="mt-4 text-blue-600 hover:underline justify-end flex"
          onClick={() => {
            dispatch(openRegisterDialog());
            dispatch(closeLoginDialog());
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
