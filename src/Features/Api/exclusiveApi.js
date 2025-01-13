import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exclusiveApi = createApi({
  reducerPath: "exclusive",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_DOMAIN_NAME}${import.meta.env.VITE_BASE_API}`,
  }),
  endpoints: (builder) => ({
    GetallBanner: builder.query({
      query: () => `/banner`,
    }),
    GetAllProductDetails: builder.query({
      query: () => "/flashsale",
    }),
    GetSingleProduct: builder.query({
      query: (id) => `/flashsale/${id}`,
    }),
    GetAllCategory: builder.query({
      query: () => "/category",
    }),
  }),
});

export const {
  useGetallBannerQuery,
  useGetAllProductDetailsQuery,
  useGetSingleProductQuery,
  useGetAllCategoryQuery,
} = exclusiveApi;
