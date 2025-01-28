import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useSearchProductsQuery } from "../../Redux/UserSlice";
import Layout from "../Layout/Layout";

const SearchResultsPage = () => {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const searchQuery = queryParams.get("query");

    const { data, isLoading, isError } = useSearchProductsQuery(searchQuery);

    // Ensure products array is derived from the result field in the response
    const products = Array.isArray(data?.result) ? data.result : [];

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching products.</div>;

    return (
     <Layout>
           <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold">Search Results for: "{searchQuery}"</h1>
            {products.length === 0 ? (
                <div className="text-gray-500 mt-4">
                    No products found for "{searchQuery}". Try another search term.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    {products.map((product) => (
                        <div key={product._id} className="border rounded-lg p-4 shadow-sm">
                            <img
                                src={`http://localhost:8080/${product.image.replace(/\\/g, '/')}`}
                                alt={product.description}
                                className="w-full h-48 object-cover mb-4"
                            />
                            <Link to={`/product/${product._id}`}>
                                <h3 className="text-lg font-semibold hover:underline">{product.description}</h3>
                            </Link>
                            <p className="text-gray-500">SKU: {product.sku}</p>
                            <p className="text-blue-600 font-bold">Price: ${product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
        
     </Layout>
    );
};

export default SearchResultsPage;
