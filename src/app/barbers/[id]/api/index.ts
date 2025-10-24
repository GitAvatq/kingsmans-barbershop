import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { basicUrl } from "@/shared/const";
import { IBarberDetail } from "../types/detail.interface";

export const barberDetailsApi = createApi({
  reducerPath: "barberDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: basicUrl,
  }),
  endpoints: (build) => ({
    getDetails: build.query<IBarberDetail, number>({
      query: (id) => ({
        url: `barberDetails/${id}`,
        method: "GET",
      }),
      transformResponse: (response: { data: IBarberDetail }) => response.data,
    }),
  }),
});

export const { useGetDetailsQuery } = barberDetailsApi;
