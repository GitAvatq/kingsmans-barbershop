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
    getBlogs: build.query<TBlog[], void>({
      query: () => ({
        url: "blog",
        method: "GET",
      }),
      transformResponse: (response: { data: TBlog[] }) => response.data,
    }),
  }),
});

export const { useGetBlogsQuery } = blogApi;
