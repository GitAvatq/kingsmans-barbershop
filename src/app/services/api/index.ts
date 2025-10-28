import { basicUrl } from "@/shared/const";
import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { ServicesList } from "@/widgets/barbdersServices/types/interface.list";

export const servicesApi = createApi({
  reducerPath: "servicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: basicUrl,
  }),
  endpoints: (build) => ({
    getServices: build.query<ServicesList[], void>({
      query: () => ({
        url: "services",
      }),
      transformResponse: (response: { data: ServicesList[] }) => response.data,
    }),
  }),
});

export const { useGetServicesQuery } = servicesApi;
