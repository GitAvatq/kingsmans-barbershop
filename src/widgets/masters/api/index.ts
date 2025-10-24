import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { basicUrl } from "@/shared/const";
import { IMaster } from "../types/interface.master";

export const mastersApi = createApi({
  reducerPath: "mastersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: basicUrl,
  }),
  endpoints: (build) => ({
    getMasters: build.query<IMaster[], void>({
      query: () => ({
        url: "masters",
        method: "GET",
      }),
      transformResponse: (response: { data: IMaster[] }) => response.data,
    }),
  }),
});

export const { useGetMastersQuery } = mastersApi;
