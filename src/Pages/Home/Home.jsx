import React from 'react';
import { useGetAllCategoriesQuery, useGetAllProductsQuery } from '../../Redux/UserSlice';
import { useDispatch } from 'react-redux';

 import { Link } from 'react-router-dom'; // Import Link for navigation
import Layout from '../../component/Layout/Layout';
import Slider from 'react-slick';
import { addToCart } from '../../Redux/CardSlice';
import { addtowhitelist } from '../../Redux/CountSlice';

const Home = () => {
  const { data: categoriesData, isLoading: categoriesLoading, error: categoriesError } = useGetAllCategoriesQuery();
  const { data: productsData, isLoading: productsLoading, error: productsError } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  if (categoriesLoading || productsLoading) return <div>Loading...</div>;
  if (categoriesError || productsError) return <div>Error: Unable to fetch data</div>;

  const categories = categoriesData || [];
  const products = productsData?.products || [];

  // Helper function to get products for a specific category
  const getProductsByCategory = (categoryId) => products.filter((product) => product.categories === categoryId);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        {categories.map((category) => (
          <div key={category._id} className="mb-8">
            <div className="mt-4 flex justify-end">
              <Link to={`/category/${category._id}`} className="text-white p-2 border-xl bg-blue-700 hover:underline">
                See All
              </Link>
            </div>
            <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
            <Slider {...settings}>
              {getProductsByCategory(category._id)
                .slice(0, 4)
                .map((product) => (
                  <div key={product._id} className="border rounded-lg p-4 shadow-sm">
                    <img src={`http://localhost:8080/${product.image.replace('\\', '/')}`} alt={product.description} className="w-full h-48 object-cover mb-4" />
                    <h3 className="text-lg font-semibold">{product.description}</h3>
                    <p className="text-gray-500">SKU: {product.sku}</p>
                    <p className="text-blue-600 font-bold">Price: ${product.price}</p>
                    <button
                      className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      onClick={() => dispatch(addtowhitelist(product))}
                    >
                   Add to Whitelist 
                    </button>
                    <button
                      className="mt-2 ml-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
            </Slider>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
