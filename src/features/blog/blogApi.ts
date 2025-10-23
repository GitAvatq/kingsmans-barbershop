import { TBlog } from "@/app/blog/types/blog.types";
import { basicUrl } from "@/shared/const";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: basicUrl,
  }),
  endpoints: (build) => ({
    getProducts: build.query<TBlog, void>({
      query: () => ({
        url: "blog",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = blogApi;
