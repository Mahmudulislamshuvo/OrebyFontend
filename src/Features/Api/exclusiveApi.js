import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exclusiveApi = createApi({
  reducerPath: "exclusive",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_DOMAIN_NAME}${import.meta.env.VITE_BASE_API}`,
    credentials: "include",
  }),
  tagTypes: ["cart"],

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
    GetusercartItem: builder.query({
      query: () => "/getuseritem",
      providesTags: ["cart"],
    }),
    Addtocart: builder.mutation({
      query: (productid) => ({
        url: "/addtocart",
        method: "POST",
        body: productid,
      }),
      invalidatesTags: ["cart"],
    }),
    Logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
        credentials: "include",
      }),
    }),
    RemoveCartItem: builder.mutation({
      query: (cartid) => ({
        url: `/cart/useritem?cartid=${cartid}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
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
  useRemoveCartItemMutation,
} = exclusiveApi;
