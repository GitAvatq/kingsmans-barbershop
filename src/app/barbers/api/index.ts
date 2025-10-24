import { basicUrl } from "@/shared/const";
import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { DataBarbers } from "../ui/listBarbers/types/listBarbers.interface";

export const barbersApi = createApi({
  reducerPath: "barbersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: basicUrl,
  }),
  endpoints: (build) => ({
    getBarbers: build.query<DataBarbers[], void>({
      query: () => ({
        url: "barbers",
      }),
      transformResponse: (response: { data: DataBarbers[] }) => response.data,
    }),
  }),
});

export const { useGetBarbersQuery } = barbersApi;
