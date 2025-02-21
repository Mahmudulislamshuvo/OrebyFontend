import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exclusiveApi = createApi({
  reducerPath: "exclusive",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_DOMAIN_NAME}${import.meta.env.VITE_BASE_API}`,
    credentials: "include",
  }),

  endpoints: (builder) => ({
    GetallBanner: builder.query({
      query: () => `/banner`,
    }),
    GetAllProductDetails: builder.query({
      query: () => "/flashsale",
    }),
    GetAllCategory: builder.query({
      query: () => "/category",
    }),
    GetBestSellingProduct: builder.query({
      query: () => "/bestselling",
    }),
    GetAllProductsfromDb: builder.query({
      query: () => "/product",
    }),
    GetSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
    GetSingleCategory: builder.query({
      query: (id) => `/category/${id}`,
    }),
    Addtocart: builder.mutation({
      query: (productid) => ({
        url: "/addtocart",
        method: "POST",
        body: productid,
      }),
    }),
    GetusercartItem: builder.query({
      query: () => "/getuseritem",
    }),
    Logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetallBannerQuery,
  useGetAllProductDetailsQuery,
  useGetAllCategoryQuery,
  useGetBestSellingProductQuery,
  useGetAllProductsfromDbQuery,
  useGetSingleProductQuery,
  useGetSingleCategoryQuery,
  useAddtocartMutation,
  useGetusercartItemQuery,
  useLogoutMutation,
} = exclusiveApi;
