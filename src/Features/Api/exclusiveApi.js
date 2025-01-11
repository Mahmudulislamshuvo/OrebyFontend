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
  }),
});

export const { useGetallBannerQuery } = exclusiveApi;
