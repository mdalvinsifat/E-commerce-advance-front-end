import React, { useState } from 'react';
import { useAddNewCategoryMutation } from '../../Redux/UserSlice';

import AdminNav from '../AdminNav/AdminNav';


const CreateCategory = () => {
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [addNewCategory, { isLoading, isSuccess, isError, error }] = useAddNewCategoryMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNewCategory(formData).unwrap();
      alert('Category added successfully!');
      setFormData({ name: '', description: '' });
    } catch (err) {
      console.error('Failed to add category:', err);
    }
  };

  return (
    <div>
    <div className="grid grid-cols-5">
        <section className="col-span-1">
            <AdminNav />
        </section>
        <section className="col-span-3">
            <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Category</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category Name</label>
                        <input
                            type="text"
                            name="name" // Updated to match state property
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                    
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Adding Category...' : 'Add Category'}
                        </button>
                    </div>
                </form>
                {isSuccess && <div className="mt-6 text-center text-green-600">Category added successfully!</div>}
                {isError && (
                    <div className="mt-6 text-center text-red-600">
                        Error: {error?.message || 'Something went wrong'}
                    </div>
                )}
            </div>
        </section>
    </div>
</div>
  );
};

export default CreateCategory;
