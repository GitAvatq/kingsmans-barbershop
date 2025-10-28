import { IValues } from "@/features/cta-form/types/cta.interface";
import { basicUrl } from "@/shared/const";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
export const ctaApi = createApi({
  reducerPath: "ctaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: basicUrl,
  }),
  endpoints: (build) => ({
    processContacts: build.mutation<IValues,IValues>({
      query: (body) => ({
        url: "contact",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useProcessContactsMutation } = ctaApi;
