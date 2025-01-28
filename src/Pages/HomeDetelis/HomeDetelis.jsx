import React, { useState, useEffect } from 'react';
import { useGetAllProductsbyIdQuery, useGetAllProductsQuery } from '../../Redux/UserSlice';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Layout from '../../component/Layout/Layout';
import ReactImageMagnify from 'react-image-magnify';

const HomeDetelis = () => {
    const { id } = useParams(); // Get the product ID from URL
    const { data, isLoading, error } = useGetAllProductsbyIdQuery(id); // Fetch product by ID
    const { data: productsData, isLoading: productsLoading, error: productsError } = useGetAllProductsQuery(); // Fetch all products

    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate(); // To programmatically navigate

    // Loading and error handling
    if (isLoading || productsLoading) return <div>Loading...</div>;
    if (error || productsError) return <div>Error: Unable to fetch data</div>;

    const products = productsData?.products || [];
    const categoryId = data?.categories; // Assuming the product's category ID is available
    const categoryProducts = products.filter(product => product.categories === categoryId); // Filter products by category

    const images = [
        data.image && `http://localhost:8080/${data.image.replace('\\', '/')}`,
        data.imageOne && `http://localhost:8080/${data.imageOne.replace('\\', '/')}`,
        data.imageTwo && `http://localhost:8080/${data.imageTwo.replace('\\', '/')}`,
        data.imageThree && `http://localhost:8080/${data.imageThree.replace('\\', '/')}`,
    ].filter(Boolean);

    // Set the initial selected image if images are available
    if (images.length > 0 && selectedImage === null) {
        setSelectedImage(images[0]);  // Set the first image as the default selected image
    }

    const handleProductClick = (productId) => {
        // Navigate to the product details page and trigger page reload
        navigate(`/product/${productId}`);
        window.location.reload(); // Force a reload of the page after navigation
    };

    return (
        <Layout>
            <div className="container mx-auto p-6 md:p-12 bg-white rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center">
                    {/* Thumbnails */}
                    <section className="col-span-2 flex justify-center items-center gap-8">
                        <div className="flex flex-col gap-4">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="cursor-pointer w-24 h-24 overflow-hidden rounded-lg shadow-md hover:scale-105 transition transform"
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Selected Image with Magnify */}
                        <div className="mb-6 flex justify-center">
                            {selectedImage && (
                                <div className="w-96 h-96 md:w-[500px] md:h-[500px] max-w-4xl relative overflow-hidden rounded-xl shadow-lg">
                                    <ReactImageMagnify
                                        {...{
                                            smallImage: {
                                                alt: 'Selected Product',
                                                isFluidWidth: false,
                                                width: 500,
                                                height: 500,
                                                src: selectedImage,
                                            },
                                            largeImage: {
                                                src: selectedImage,
                                                width: 1200,
                                                height: 1800,
                                            },
                                            enlargedImageContainerDimensions: {
                                                width: '150%',
                                                height: '150%',
                                            },
                                            enlargedImagePosition: 'over',
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Product Details */}
                    <section>
                        <div className="space-y-6">
                            <h1 className="text-3xl font-extrabold text-gray-900">{data.heading}</h1>
                            <h2 className="text-xl font-medium text-gray-700">{data.subHeading}</h2>
                            <p className="text-2xl font-bold text-blue-600">
                                <div>
                                    {
                                        data.oldPrice   ?  "৳" : null
                                    }
                                </div>
                             <del className="text-gray-500 font-normal">{data.oldPrice}</del>{' '}
                                <span className="ml-2">৳ {data.price}</span>
                            </p>
                            <div className="space-y-4 text-gray-700">
                                <p><strong>Size:</strong> {data.size}</p>
                                <p><strong>Color:</strong> {data.color}</p>
                                <p><strong>GSM:</strong> {data.gsm}</p>
                                <p><strong>Fabric:</strong> {data.fabric}</p>
                                <p><strong>SKU:</strong> {data.sku}</p>
                                <p><strong>Categories:</strong> {data.categories}</p>
                                <p><strong>Tag:</strong> {data.tag}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Product Description</h3>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition">
                                Buy Now
                            </button>
                        </div>
                    </section>
                </div>

                <div className="mt-9">
                    <h3 className="text-3xl font-bold">Product Description</h3>
                    <p>{data.description}</p>
                </div>

                <h1>Similar Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    {categoryProducts.map((product) => (
                        <div key={product._id} className="border rounded-lg p-4 shadow-sm">
                            <img
                                src={`http://localhost:8080/${product.image.replace('\\', '/')}`}
                                alt={product.description}
                                className="w-full h-48 object-cover mb-4"
                            />
                            <h3
                                className="text-lg font-semibold hover:underline cursor-pointer"
                                onClick={() => handleProductClick(product._id)}
                            >
                                {product.description}
                            </h3>

                            <p className="text-gray-500">SKU: {product.sku}</p>
                            <p className="text-blue-600 font-bold">Price: ৳ {product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default HomeDetelis;
