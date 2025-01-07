import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => '/category',
    }),
    getAllProducts: builder.query({
      query: () => '/product',
    }),
    getAllProductsbyId: builder.query({
      query: (id) => `/product/${id}`,
    }),
    getAllCategoriesbyId: builder.query({
      query: (id) => `/category/${id}`,
    }),
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: '/product',
        method: 'POST',
        body: newProduct,
      }),
    }),
    addNewCategory: builder.mutation({
      query: (newCategory) => ({
        url: '/category',
        method: 'POST',
        body: newCategory,
      }),
    }),
    addnewAuthRegister: builder.mutation({
      query: (newAuthRegister) => ({
        url: '/auth/register',
        method: 'POST',
        body: newAuthRegister,
      }),
    }),
    addnewAuthLogin: builder.mutation({
      query: (newAuthLogin) => ({
        url: '/auth/login',
        method: 'POST',
        body: newAuthLogin,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `/product/${id}`,
        method: 'PUT',
        body: updatedProduct,
      }),
    }),
    updateCategory: builder.mutation({
      query: ({ id, updateCategorys }) => ({
        url: `/category/${id}`,
        method: 'PUT',
        body: updateCategorys,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: 'DELETE',
      }),
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetAllProductsQuery,
  useGetAllProductsbyIdQuery,
  useGetAllCategoriesbyIdQuery,
  useAddNewProductMutation,
  useAddNewCategoryMutation,
  useAddnewAuthRegisterMutation,
  useAddnewAuthLoginMutation,
  useUpdateProductMutation,
  useUpdateCategoryMutation,
  useDeleteProductMutation,
  useDeleteCategoryMutation,
} = apiSlice;
