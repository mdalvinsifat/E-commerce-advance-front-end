import React, { useState } from 'react';
import { useDeleteProductMutation, useGetAllProductsQuery } from '../../Redux/UserSlice';
import { useNavigate } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';

const SeeProduct = () => {
    const { data, refetch } = useGetAllProductsQuery();
    const [deleteProduct] = useDeleteProductMutation();
    const [loadingId, setLoadingId] = useState(null); // Track the loading state for delete buttons
    const navigate = useNavigate();

    const products = data?.products || [];

    if (products.length === 0) {
        return <div>No products found.</div>;
    }

    const handleUpdate = (id) => {
        navigate(`/admin/create-product-update/${id}`);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this product?');
        if (!confirmDelete) return;

        try {
            setLoadingId(id); // Set loading state for the specific product
            await deleteProduct(id).unwrap();
            alert('Deleted Successfully');
            refetch(); // Refresh the product list
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Failed to delete the product. Please try again.');
        } finally {
            setLoadingId(null); // Reset loading state
        }
    };

    return (
        <div className="grid grid-cols-5">
            <section className="col-span-1">
                <AdminNav />
            </section>

            <section className="col-span-3 ml-5">
                <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold text-center mb-6">Product List</h1>
                    <ul className="space-y-4">
                        {products.map((item) => (
                            <li
                                key={item._id}
                                className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-100"
                            >
                                <div>
                                    <h2 className="text-lg font-semibold">{item.heading}</h2>
                                    <p className="text-gray-600">Price: ৳ {item.price}</p>
                                </div>
                                <div className="flex space-x-4">
                                    <button
                                        onClick={() => handleUpdate(item._id)}
                                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className={`px-4 py-2 rounded-md text-white ${
                                            loadingId === item._id
                                                ? 'bg-gray-500 cursor-not-allowed'
                                                : 'bg-red-500 hover:bg-red-600'
                                        }`}
                                        disabled={loadingId === item._id} // Disable button while loading
                                    >
                                        {loadingId === item._id ? 'Deleting...' : 'Delete'}
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default SeeProduct;
