import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../Redux/UserSlice";
import Layout from "../../component/Layout/Layout";

const CategoryProduct = () => {
    const { id: categoryId } = useParams();
    const { data: productsData, isLoading, error } = useGetAllProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: Unable to fetch products</div>;

    const products = productsData?.products || [];
    const categoryProducts = products.filter((product) => product.categories === categoryId);

    return (
        <Layout>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Products for Category</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    {categoryProducts.map((product) => (
                        <div key={product._id} className="border rounded-lg p-4 shadow-sm">
                            <img
                                src={`http://localhost:8080/${product.image.replace('\\', '/')}`}
                                alt={product.description}
                                className="w-full h-48 object-cover mb-4"
                            />
                            <h3 className="text-lg font-semibold">{product.description}</h3>
                            <p className="text-gray-500">SKU: {product.sku}</p>
                            <p className="text-blue-600 font-bold">Price: ${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default CategoryProduct;
