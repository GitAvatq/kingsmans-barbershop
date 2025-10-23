import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  endpoints: (build) => ({
    getProducts: build.query<any, void>({
      query: () => ({
        url: "blog",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = blogApi;
