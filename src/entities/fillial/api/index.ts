import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { basicUrl } from "@/shared/const";
import { IFillial } from "../types/fillial.types";
export const fillialApi = createApi({
  reducerPath: "fillialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: basicUrl,
  }),
  endpoints: (build) => ({
    getFillials: build.query<IFillial[], void>({
      query: () => ({
        url: "fillials",
        method: "GET",
      }),
      transformResponse: (response: { data: IFillial[] }) => response.data,
    }),
    getFillialById: build.query<any, number>({
      query: (id: number) => ({
        url: `fillials/${id}`,
        method: "GET",
      }),
      transformResponse: (response: { data: any }) => response.data,
    }),
    searchFillials: build.query<any, void>({
      query: () => ({
        url: "fillials/search",
        method: "GET",
      }),
      transformResponse: (response: { data: any }) => response.data,
    }),
  }),
});

export const { useGetFillialsQuery, useLazySearchFillialsQuery , useGetFillialByIdQuery} = fillialApi;
