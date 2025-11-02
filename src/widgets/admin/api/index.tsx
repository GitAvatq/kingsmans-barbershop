import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { basicUrl } from "@/shared/const";
import { Blog } from "@/app/services/types/blog.interface";
import { DataBarbers } from "@/app/barbers/ui/listBarbers/types/listBarbers.interface";
import { ServicesList } from "@/widgets/barbdersServices/types/interface.list";

export const adminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({
    baseUrl: basicUrl,
  }),
  endpoints: (build) => ({
    postLatestNews: build.mutation<any, Blog>({
      query: (data: Blog) => ({
        url: "blog/createBlog",
        method: "POST",
        body: data,
      }),
    }),
    postBarber: build.mutation<any, DataBarbers>({
      query: (data: DataBarbers) => ({
        url: "barbers/createBarber",
        method: "POST",
        body: data,
      }),
    }),
    postService: build.mutation<any, ServicesList>({
      query: (data: ServicesList) => ({
        url: "services/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  usePostBarberMutation,
  usePostLatestNewsMutation,
  usePostServiceMutation,
} = adminApi;
