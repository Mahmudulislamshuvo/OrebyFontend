import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    GetAllProduct: builder.query({
      query: () => `/products`,
    }),
    BestSellingProduct: builder.query({
      query: () => `/products/search?q=phone`,
    }),
    GetProductCategoryList: builder.query({
      query: () => `/products/categories`,
    }),
    GetsingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    GetProductByCategory: builder.query({
      query: (categoryName) => `/products/category/${categoryName}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductQuery,
  useBestSellingProductQuery,
  useGetProductCategoryListQuery,
  useGetsingleProductQuery,
  useGetProductByCategoryQuery,
} = productApi;
