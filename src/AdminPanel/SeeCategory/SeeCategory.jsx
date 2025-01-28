import React from 'react';
import { useDeleteCategoryMutation, useGetAllCategoriesQuery } from '../../Redux/UserSlice';
import AdminNav from '../AdminNav/AdminNav';

const SeeCategory = () => {
    // Fetch categories using RTK Query
    const { data: categories, isLoading, error, refetch } = useGetAllCategoriesQuery();

    // RTK Query mutation for deleting a category
    const [deleteCategory] = useDeleteCategoryMutation();

    // Handle delete operation
    const handleDelete = async (id) => {
        try {
            await deleteCategory(id).unwrap(); 
            alert('Deleted Successfully');
            refetch(); 
        } catch (err) {
            console.error('Error deleting category:', err);
            alert('Failed to delete the category');
        }
    };

    // Render loading or error states
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error fetching categories!</h1>;

    return (

        <div className='grid grid-cols-5'>

        <section className='col-span-1'>
        <AdminNav/>
        </section>
        <section className='col-span-3'>
            <h1 className="text-3xl font-semibold text-center mb-6">Categories</h1>
            <section className="col-span-3 ml-5">
                <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold text-center mb-6">Product List</h1>
                    <ul className="space-y-4">
                        {categories?.map((item) => (
                            <li
                                key={item._id}
                                className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-100"
                            >
                                <div>
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                </div>
                                <div className="flex space-x-4">
                                    <button
                                        // Placeholder for update functionality
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </section>
        </div>
    );
};

export default SeeCategory;
